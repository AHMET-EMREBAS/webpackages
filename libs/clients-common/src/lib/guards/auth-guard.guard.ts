import { InjectionToken, Provider } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const AUTH_GUARD_TOKEN = new InjectionToken('AUTH_GUARD_TOKEN');
export const AuthGuard: CanActivateFn = (route, state) => {
  return false;
};

export function provideAutHGuard(): Provider {
  return {
    provide: AUTH_GUARD_TOKEN,
    useValue: AuthGuard,
  };
}
