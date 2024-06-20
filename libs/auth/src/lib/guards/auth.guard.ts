import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import {
  Operation,
  PublicResourceToken,
  ResouceNameToken,
  ResourceNames,
  ResourceOperationType,
} from '@webpackages/core';
import { Request } from 'express';
import { AuthService } from '../auth.service';
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
    ]) as ResourceNames;

    console.log(operationName, resouceName);

    const req = ctx.switchToHttp().getRequest<Request>();

    const token = this.extractTokenFromAuthorizationHeader(req);

    const user = await this.authService.verify(token);

    if (user.permissions.Admin || user.permissions.Root) {
      return true;
    }

    if (user.permissions[resouceName][operationName]) {
      return true;
    }

    return false;
  }

  extractTokenFromAuthorizationHeader(req: Request) {
    const token = req.headers.authorization;

    if (token) {
      const [, ...rest] = token.split(' ');
      return rest.join(' ');
    }

    throw new UnprocessableEntityException(
      `Authorization header is not provided`
    );
  }
}