import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { AuthHeaders } from './auth-headers';

export const UserParam = createParamDecorator((data, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<Request>();
  const user = (request as any).user;

  return user;
});

export const UserIdParam = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const user = (request as any).user;
    const userId = user.id;
    return userId;
  }
);

export const OrgnameHeader = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const orgname = request.headers[AuthHeaders.X_ORGNAME];
    return orgname;
  }
);

export const ScopeHeader = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const scope = request.headers[AuthHeaders.X_SCOPE];
    return scope;
  }
);

export const DeviceIdHeader = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const deviceId = request.headers[AuthHeaders.X_DEVICE_ID];
    return deviceId;
  }
);

export const TokenParam = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const deviceId = request.headers[AuthHeaders.AUTHORIZATION];
    return deviceId;
  }
);
