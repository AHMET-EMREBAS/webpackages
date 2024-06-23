export type AuthPathBuilderOptions = {
  prefix?: string;
};
export class AuthPathBuilder {
  constructor(protected readonly options?: AuthPathBuilderOptions) {}

  protected __prefix() {
    return this.options?.prefix || '';
  }

  protected __path(...paths: string[]) {
    return [this.__prefix(), ...paths].join('/');
  }

  controller() {
    return 'auth';
  }

  login() {
    return this.__path(`login`);
  }

  signup() {
    return this.__path('signup');
  }

  forgotPassword() {
    return this.__path(`forgot-password`);
  }

  updatePassword() {
    return this.__path('update-password');
  }

  ssoLogin() {
    return this.__path(`sso-login`);
  }

  hasSession() {
    return this.__path(`has-session`);
  }

  logout() {
    return this.__path('logout');
  }
  
  logoutAll() {
    return this.__path('logout-all');
  }
}
