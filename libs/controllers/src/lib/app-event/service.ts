import { BaseEntityService } from '@webpackages/database';
import { AppEvent, AppEventView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppEventService extends BaseEntityService<AppEvent, AppEventView> {
  constructor(
    @InjectRepository(AppEvent) repo: Repository<AppEvent>,
    @InjectRepository(AppEventView) view: Repository<AppEventView>
  ) {
    super(repo, view);
  }
}
