// prettier-ignore
import { Controller, Post, Param, ForbiddenException, Body, UseGuards, HttpCode } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorator';
import { UserReqType } from 'src/types';
import { TransactionsService } from './transactions.service';

@UseGuards(AuthGuard('jwt'))
@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Post(':toUser')
  @HttpCode(202)
  transaction(
    @GetUser() userReq: UserReqType,
    @Param('toUser') toUser: string,
    @Body() body: any,
  ) {
    if (toUser === userReq.username) {
      throw new ForbiddenException('Invalid user key');
    }
    return this.transactionsService.sendCash(userReq, toUser, body);
  }
}
