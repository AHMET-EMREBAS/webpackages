import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Login, LoginResponse, MessageResponse } from '@webpackages/types';
import { notImpError } from '@webpackages/utils';
import { AuthPathBuilder } from '@webpackages/path';
import { Observable } from 'rxjs';

const P = new AuthPathBuilder({ prefix: 'api' });
@Injectable()
export class AuthService {
  http = inject(HttpClient);

  login(body: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(P.login(), body);
  }

  logout() {
    return this.http.post<MessageResponse>(P.logout(), {});
  }

  signup() {
    notImpError();
  }

  forgotPassword() {
    notImpError();
  }

  loginWithSSO() {
    notImpError();
  }
}
