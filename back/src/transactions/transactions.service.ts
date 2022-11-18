// prettier-ignore
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserReqType } from 'src/types';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async sendCash(userReq: UserReqType, toUser: string, data: any) {
    if (
      !userReq.account.balance ||
      !data.value ||
      userReq.account.balance < data.value ||
      data.value <= 0
    ) {
      throw new BadRequestException('Insufficient money');
    }

    const receiver = await this.prisma.users.findUnique({
      where: { username: toUser },
      include: { account: true },
    });

    if (!receiver) throw new NotFoundException('User not found');

    await this.prisma.$transaction([
      this.prisma.transactions.create({
        data: {
          value: data.value,
          fromId: userReq.account.id,
          toId: receiver.account.id,
        },
      }),
      this.prisma.accounts.update({
        where: { userId: userReq.id },
        data: { balance: { decrement: Number(data.value) } },
      }),
      this.prisma.accounts.update({
        where: { userId: receiver.id },
        data: { balance: { increment: Number(data.value) } },
      }),
    ]);

    return {
      statusCode: 202,
      message: 'Success',
    };
  }
}
