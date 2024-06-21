import { BaseEntityService } from '@webpackages/database';
import { Inbox } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InboxService extends BaseEntityService<Inbox> {
  constructor(@InjectRepository(Inbox) repo: Repository<Inbox>) {
    super(repo);
  }
}
