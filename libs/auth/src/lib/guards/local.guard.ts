import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Request } from 'express';
import { isNotUndefined } from '@webpackages/utils';
import { appendParams } from '../common';
/**
 *
 * Find user by username and password and create token
 */
@Injectable()
export class LocalGuard implements CanActivate {
  constructor(protected readonly authService: AuthService) {}

  async canActivate(ctx: ExecutionContext) {
    const req = ctx.switchToHttp().getRequest<Request>();
    const { username, password } = ctx.switchToHttp().getRequest().body;
    const foundSession = await this.authService.login({ username, password });

    if (isNotUndefined(foundSession)) {
      appendParams(req, foundSession);
      return true;
    }

    return false;
  }
}
