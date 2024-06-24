import { AuthPathBuilder } from '@webpackages/path';
import axos, { AxiosError, AxiosRequestConfig } from 'axios';
import {
  ForgotPassword,
  Login,
  LoginResponse,
  Signup,
  SsoLogin,
  MessageResponse,
} from '@webpackages/types';
import axios from 'axios';
import { ISession } from '@webpackages/models';

export class AuthClient {
  constructor(
    protected readonly authPath: AuthPathBuilder,
    protected readonly baseUrl = ''
  ) {}
  protected async __post<T>(
    path: string,
    body: T,
    config: AxiosRequestConfig = {}
  ) {
    try {
      return (
        await axios.post(path, body, {
          ...config,
          baseURL: this.baseUrl,
        })
      ).data;
    } catch (res: any) {
      return res.response.data;
    }
  }

  async login(body: Login): Promise<ISession> {
    return await this.__post(this.authPath.login(), body);
  }

  async logout(autorizationToken: string): Promise<MessageResponse> {
    return await this.__post(
      this.authPath.logout(),
      {},
      { headers: { Authorization: autorizationToken } }
    );
  }
  async logoutAll(autorizationToken: string): Promise<MessageResponse> {
    const res = await axos.post(
      this.authPath.logoutAll(),
      {},
      { headers: { Authorization: autorizationToken } }
    );
    return res.data;
  }

  async forgotPassword(body: ForgotPassword): Promise<MessageResponse> {
    return await this.__post(this.authPath.forgotPassword(), body);
  }

  async ssoLogin(body: SsoLogin): Promise<LoginResponse> {
    return await this.__post(this.authPath.ssoLogin(), body);
  }

  async signup(body: Signup): Promise<ISession> {
    return await this.__post(this.authPath.signup(), body);
  }
}
