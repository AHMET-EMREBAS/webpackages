import { BaseEntityService } from '@webpackages/database';
import { Clock } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClockService extends BaseEntityService<Clock> {
  constructor(@InjectRepository(Clock) repo: Repository<Clock>) {
    super(repo);
  }
}
