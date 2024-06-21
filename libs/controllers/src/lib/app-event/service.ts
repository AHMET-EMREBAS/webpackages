import { BaseEntityService } from '@webpackages/database';
import { AppEvent } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppEventService extends BaseEntityService<AppEvent> {
  constructor(@InjectRepository(AppEvent) repo: Repository<AppEvent>) {
    super(repo);
  }
}
