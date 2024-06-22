import { BaseEntityService } from '@webpackages/database';
import { Session, SessionView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionService extends BaseEntityService<Session, SessionView> {
  constructor(
    @InjectRepository(Session) repo: Repository<Session>,
    @InjectRepository(SessionView) view: Repository<SessionView>
  ) {
    super(repo, view);
  }
}
