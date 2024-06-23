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
import { AuthGuard, LocalGuard } from './guards';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthHeaders, AuthNames } from '@webpackages/types';

const A = new APB();
const C = new ACB({ loginResponseDto: LoginResponseDto, pathBuilder: A });

@C.Controller()
export class AuthController {
  
  @UseGuards(AuthGuard)
  @ApiBearerAuth(AuthNames.BEARER_AUTH)
  @Get('test-session')
  test() {
    return { message: 'You should see this message if you have a sesion.' };
  }

  @UseGuards(AuthGuard)
  @PublicResource()
  @Get('test-public')
  test2() {
    return {
      message: 'You should see this message!',
    };
  }
  /**
   * - Create token and send in body
   * - Create deviceId and send it body
   * @param loginDto
   * @param token
   * @returns
   */

  @UseGuards(LocalGuard)
  @C.Login()
  login(@Body() loginDto: LoginDto, @SessionParam() session: string) {
    return { session };
  }

  @C.Signup()
  signup() {
    notImpError();
    return {};
  }

  @C.HasSession()
  hasSession() {
    notImpError();
  }

  @C.Logout()
  logout() {
    notImpError();
  }
}
