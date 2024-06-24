import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthHeaders } from '@webpackages/types';
import { Request } from 'express';

export const UserParam = createParamDecorator((data, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<Request>();
  const user = (request as any)[AuthHeaders.User];

  return user;
});

export const SessionParam = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const session = (request as any)[AuthHeaders.Session];

    return session;
  }
);

export const UserIdParam = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const user = (request as any)[AuthHeaders.User];
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
