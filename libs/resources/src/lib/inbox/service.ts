import { BaseEntityService } from '@webpackages/core';
import { Inbox } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InboxService extends BaseEntityService<Inbox> {
  constructor(@InjectRepository(Inbox) repo: Repository<Inbox>) {
    super(repo);
  }
}
