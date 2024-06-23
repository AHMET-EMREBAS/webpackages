import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import {
  PublicResourceToken,
  ResouceNameToken,
  ResourceOperationType,
} from '@webpackages/access-policy';
import { Request } from 'express';
import { AuthService } from '../auth.service';
import { AuthHeaders, Operation, ResourceName } from '@webpackages/types';
import { appendParams, extractToken } from '../common';
import { v4 } from 'uuid';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    protected readonly reflector: Reflector,
    protected readonly authService: AuthService
  ) {}

  async canActivate(ctx: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride(PublicResourceToken, [
      ctx.getClass(),
      ctx.getHandler(),
    ]);

    if (isPublic === true) return true;

    const operationName = this.reflector.getAllAndOverride(
      ResourceOperationType,
      [ctx.getClass(), ctx.getHandler()]
    ) as keyof Operation;

    const resouceName = this.reflector.getAllAndOverride(ResouceNameToken, [
      ctx.getClass(),
    ]) as ResourceName;

    console.log(operationName, resouceName);

    const req = ctx.switchToHttp().getRequest<Request>();

    const token = extractToken(req);

    const session = await this.authService.verify(token);
    const user = session.user;

    if (user.permissions.Admin || user.permissions.Root) {
      appendParams(req, session);
      return true;
    }

    try {
      const hasPermission = user.permissions[resouceName][operationName];
      if (hasPermission === true) {
        return true;
      }
    } catch (err) {
      // Continue
    }
    return false;
  }
}
