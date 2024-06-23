import { Body, Get } from '@nestjs/common';
import { ForgotPasswordDto, LoginDto } from './dto';
import { PublicResource, SessionParam } from '@webpackages/access-policy';
import { LoginResponseDto } from './response';
import { AuthPathBuilder as APB } from '@webpackages/path';
import { AuthControllerBuilder as ACB } from '@webpackages/rest';
import { notImpError } from '@webpackages/utils';
import { Auth, BasicAuth } from './guards';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthNames } from '@webpackages/types';
import { AuthService } from './auth.service';
import { Session } from '@webpackages/entities';

const A = new APB();
const C = new ACB({ loginResponseDto: LoginResponseDto, pathBuilder: A });

@C.Controller()
export class AuthController {
  constructor(protected readonly authService: AuthService) {}
  @Auth()
  @ApiBearerAuth(AuthNames.BEARER_AUTH)
  @Get('test-session')
  test() {
    return { message: 'You should see this message if you have a sesion.' };
  }

  @Auth()
  @PublicResource()
  @Get('test-public')
  test2() {
    return {
      message: 'You should see this message!',
    };
  }

  @BasicAuth()
  @C.Login()
  login(@Body() loginDto: LoginDto, @SessionParam() session: string) {
    return { session };
  }

  @PublicResource()
  @C.Signup()
  signup() {
    notImpError();
  }

  @PublicResource()
  @C.ForgotPassword()
  forgotPassword(@Body() body: ForgotPasswordDto) {
    return this.authService.forgotPassword(body);
  }

  @Auth()
  @C.HasSession()
  hasSession() {
    return { message: 'You have a session' };
  }

  @Auth()
  @C.Logout()
  logout(@SessionParam() session: Session) {
    return this.authService.logout(session);
  }

  @Auth()
  @C.LogoutAll()
  logoutAll(@SessionParam() session: Session) {
    return this.authService.logoutAll(session);
  }
}
