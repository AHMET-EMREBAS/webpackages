import { BaseEntityService } from '@webpackages/database';
import { Event } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EventService extends BaseEntityService<Event> {
  constructor(@InjectRepository(Event) repo: Repository<Event>) {
    super(repo);
  }
}
