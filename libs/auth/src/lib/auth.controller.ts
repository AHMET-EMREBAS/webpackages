import { Body } from '@nestjs/common';
import { LoginDto } from './dto';
import { TokenParam } from '@webpackages/access-policy';
import { LoginResponseDto } from './response';
import { AuthPathBuilder as APB } from '@webpackages/path';
import { AuthControllerBuilder as ACB } from '@webpackages/rest';
import { notImpError } from '@webpackages/utils';

const A = new APB();
const C = new ACB({ loginResponseDto: LoginResponseDto, pathBuilder: A });

@C.Controller()
export class AuthController {
  /**
   * - Create token and send in body
   * - Create deviceId and send it body
   * @param loginDto
   * @param token
   * @returns
   */
  @C.Login()
  login(
    @Body() loginDto: LoginDto,
    @TokenParam() token: string
  ): LoginResponseDto {
    return { token };
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
