import { BaseEntityService } from '@webpackages/database';
import { Notification, NotificationView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService extends BaseEntityService<
  Notification,
  NotificationView
> {
  constructor(
    @InjectRepository(Notification) repo: Repository<Notification>,
    @InjectRepository(NotificationView) view: Repository<NotificationView>
  ) {
    super(repo, view);
  }
}
