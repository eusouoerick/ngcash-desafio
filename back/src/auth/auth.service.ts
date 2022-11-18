// prettier-ignore
import { Injectable, BadRequestException,ForbiddenException,NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { LoginDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async signin(data: LoginDto) {
    const user = await this.prisma.users.findUnique({
      where: { username: data.username },
      include: { account: { select: { balance: true, id: true } } },
    });
    if (!user) throw new NotFoundException('Invalid credentials');

    const hash = await argon.verify(user.password, data.password);
    if (!hash) throw new ForbiddenException('Invalid credentials');

    const token = await this.createToken(user.id);
    delete user.password;
    return { token, user };
  }

  async signup(data: LoginDto) {
    try {
      const password = await argon.hash(data.password);
      const user = await this.prisma.users.create({
        data: {
          username: data.username,
          password,
        },
      });

      const account = await this.prisma.accounts.create({
        data: { userId: user.id, balance: 10000 },
        select: { balance: true, id: true },
      });

      const token = await this.createToken(user.id);
      delete user.password;
      return { token, user: { ...user, account } };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new BadRequestException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async createToken(userId: string) {
    const payload = { userId };
    const secret = process.env.JWT_SECRET;
    return await this.jwt.signAsync(payload, { secret, expiresIn: '24h' });
  }
}
