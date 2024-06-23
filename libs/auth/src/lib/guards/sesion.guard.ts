import { CanActivate, ExecutionContext } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Session } from 'inspector';
import { Repository } from 'typeorm';
import { extractToken } from '../common';
import { Request } from 'express';
import { isNotUndefined } from '@webpackages/utils';
import { AuthService } from '../auth.service';

export class SessionGuard implements CanActivate {
  constructor(
    @InjectRepository(Session) protected readonly session: Repository<Session>,
    protected readonly authService: AuthService
  ) {}

  async canActivate(ctx: ExecutionContext) {
    const req = ctx.switchToHttp().getRequest<Request>();

    const token = extractToken(req);

    if (isNotUndefined(token)) {
      const payload = await this.authService.verify(token);

      return true;
    }

    return true;
  }
}
