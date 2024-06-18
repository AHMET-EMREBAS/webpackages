import { BaseEntityService } from '@webpackages/core';
import { ClockIn } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClockInService extends BaseEntityService<ClockIn> {
  constructor(@InjectRepository(ClockIn) repo: Repository<ClockIn>) {
    super(repo);
  }
}
