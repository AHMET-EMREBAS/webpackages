import { BaseEntityService } from '@webpackages/database';
import { Clock, ClockView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClockService extends BaseEntityService<Clock, ClockView> {
  constructor(
    @InjectRepository(Clock) repo: Repository<Clock>,
    @InjectRepository(ClockView) view: Repository<ClockView>
  ) {
    super(repo, view);
  }
}
