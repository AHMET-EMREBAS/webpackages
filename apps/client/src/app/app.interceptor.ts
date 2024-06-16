import { HttpInterceptorFn } from '@angular/common/http';

export const AppInterceptor: HttpInterceptorFn = (req, next) => {
  const nreq = req.clone({ url: `http://localhost:3000/${req.url}` });
  return next(nreq);
};
