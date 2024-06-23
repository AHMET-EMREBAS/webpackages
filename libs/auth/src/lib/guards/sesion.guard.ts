import { CanActivate, ExecutionContext } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Session } from 'inspector';
import { Repository } from 'typeorm';

export class SessionGuard implements CanActivate {
  constructor(
    @InjectRepository(Session) protected readonly session: Repository<Session>
  ) {}
  canActivate(ctx: ExecutionContext) {
    return false;
    this.session.findOneBy({ id: sessionId });
  }
}
