import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import {
  Operation,
  PublicResourceToken,
  ResouceNameToken,
  ResourceOperationType,
} from '@webpackages/core';
import { Request } from 'express';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    protected readonly reflector: Reflector,
    protected readonly jwt: JwtService
  ) {}

  canActivate(ctx: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride(PublicResourceToken, [
      ctx.getClass(),
      ctx.getHandler(),
    ]);

    if (isPublic === true) return true;

    const operation = this.reflector.getAllAndOverride(ResourceOperationType, [
      ctx.getClass(),
      ctx.getHandler(),
    ]) as keyof Operation;

    const resouce = this.reflector.getAllAndOverride(ResouceNameToken, [
      ctx.getClass(),
    ]);

    console.log(operation, resouce);

    const req = ctx.switchToHttp().getRequest<Request>();

    const token = this.extractTokenFromAuthorizationHeader(req);


    

    return true;
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
