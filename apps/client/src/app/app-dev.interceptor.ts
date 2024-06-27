import { HttpInterceptorFn } from '@angular/common/http';
import { isDevMode } from '@angular/core';

export const AppDevInterceptor: HttpInterceptorFn = (req, next) => {
  if (isDevMode()) {
    const local = `http://localhost:3001/${req.url}`;
    return next(req.clone({ url: local }));
  }
  return next(req);
};
