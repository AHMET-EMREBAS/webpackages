import { BaseEntityService } from '@webpackages/database';
import { Inbox, InboxView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InboxService extends BaseEntityService<Inbox, InboxView> {
  constructor(
    @InjectRepository(Inbox) repo: Repository<Inbox>,
    @InjectRepository(InboxView) view: Repository<InboxView>
  ) {
    super(repo, view);
  }
}
