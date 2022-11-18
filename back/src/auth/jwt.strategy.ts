import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserReqType } from 'src/types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: {
    username: string;
    userId: string;
  }): Promise<UserReqType> {
    const user = await this.prisma.users.findUnique({
      where: { id: payload.userId },
      include: {
        account: {
          select: {
            id: true,
            balance: true,
          },
        },
      },
    });

    delete user.password;
    return user;
  }
}
