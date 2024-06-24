import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LoginResponse } from '@webpackages/types';
import { notImpError, throwError } from '@webpackages/utils';

@Injectable()
export class AuthService {
  http = inject(HttpClient);

  login(): Promise<LoginResponse> {
    notImpError();
  }

  logout() {
    notImpError();
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
