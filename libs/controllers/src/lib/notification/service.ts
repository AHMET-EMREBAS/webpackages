import { BaseEntityService } from '@webpackages/database';
import { Notification } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService extends BaseEntityService<Notification> {
  constructor(@InjectRepository(Notification) repo: Repository<Notification>) {
    super(repo);
  }
}
