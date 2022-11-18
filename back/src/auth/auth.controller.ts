import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signin(@Body() body: LoginDto) {
    return this.authService.signin(body);
  }
  @Post('signup')
  signup(@Body() body: LoginDto) {
    return this.authService.signup(body);
  }
}
