import { BaseEntityService } from '@webpackages/database';
import { Session } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionService extends BaseEntityService<Session> {
  constructor(@InjectRepository(Session) repo: Repository<Session>) {
    super(repo);
  }
}
