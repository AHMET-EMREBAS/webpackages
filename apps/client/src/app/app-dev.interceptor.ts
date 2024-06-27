import { HttpInterceptorFn } from '@angular/common/http';
import { isDevMode } from '@angular/core';

export const AppDevInterceptor: HttpInterceptorFn = (req, next) => {
  if (isDevMode()) {
    return next(req.clone({ url: `http://192.168.50.23:3001/${req.url}` }));
  }
  return next(req);
};
