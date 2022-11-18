import { Controller, Get, UseGuards, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorator';
import type { TransactionQueryType, UserReqType } from 'src/types';
import { UserService } from './user.service';

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findUser(@GetUser() userReq: UserReqType) {
    return userReq;
  }

  @Get('/transactions')
  async getBalance(
    @GetUser() userReq: UserReqType,
    @Query() query: TransactionQueryType,
  ) {
    return this.userService.transactions(userReq, query);
  }
}
