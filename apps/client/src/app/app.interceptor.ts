import { HttpInterceptorFn } from '@angular/common/http';

export const AppInterceptor: HttpInterceptorFn = (req, next) => {
  const nreq = req.clone();
  return next(nreq);
};
