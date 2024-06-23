import { Body, Get, UseGuards } from '@nestjs/common';
import { LoginDto } from './dto';
import {
  DeviceIdHeader,
  PublicResource,
  SessionParam,
  TokenParam,
} from '@webpackages/access-policy';
import { LoginResponseDto } from './response';
import { AuthPathBuilder as APB } from '@webpackages/path';
import { AuthControllerBuilder as ACB } from '@webpackages/rest';
import { notImpError } from '@webpackages/utils';
import { Auth, AuthGuard, BasicAuth, LocalGuard } from './guards';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthHeaders, AuthNames } from '@webpackages/types';

const A = new APB();
const C = new ACB({ loginResponseDto: LoginResponseDto, pathBuilder: A });

@C.Controller()
export class AuthController {
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

  @Auth()
  @C.HasSession()
  hasSession() {
    return { message: 'You have a session' };
  }

  @C.Logout()
  logout() {
    notImpError();
  }
}
