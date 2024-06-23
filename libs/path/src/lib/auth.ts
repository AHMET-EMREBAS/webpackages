export type AuthPathBuilderOptions = {
  prefix?: string;
};
export class AuthPathBuilder {
  constructor(protected readonly options?: AuthPathBuilderOptions) {}

  protected __prefix() {
    const p = this.options?.prefix;
    return this.options?.prefix || '';
  }

  protected __path(...paths: string[]) {
    return [this.__prefix(), ...paths].join('/');
  }

  login() {
    return this.__path(`login`);
  }

  logout() {
    return this.__path('logout');
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
}
