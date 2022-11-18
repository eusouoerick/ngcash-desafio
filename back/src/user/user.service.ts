import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserReqType, TransactionQueryType } from 'src/types';
import { isSameDay } from 'date-fns';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async transactions(userReq: UserReqType, query: TransactionQueryType) {
    let list = [];
    if (query.type == 'cash-in' || query.type == 'cash-out') {
      // prettier-ignore
      const field = query.type == 'cash-in' ? 'creditedAccountId' : 'debitedAccountId';
      list = await this.prisma.accounts
        .findUnique({
          where: { userId: userReq.id },
          select: { [field]: true },
        })
        [field]();
    } else {
      list = await this.prisma.transactions.findMany({
        where: {
          OR: [{ fromId: userReq.account.id }, { toId: userReq.account.id }],
        },
        // orderBy: { createdAt: 'desc' },
      });
    }

    if (query.date) {
      const formDate = query.date
        .split(/(-|\/)/)
        .filter((i) => !/(-|\/)/.test(i));
      const date = new Date(+formDate[0], +formDate[1] - 1, +formDate[2]);
      list = list.filter((item) => isSameDay(new Date(item.createdAt), date));
    }

    return list.reverse();
  }
}
