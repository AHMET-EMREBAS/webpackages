import { BaseEntityService } from '@webpackages/core';
import { Sample } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SampleService extends BaseEntityService<Sample> {
  constructor(@InjectRepository(Sample) repo: Repository<Sample>) {
    super(repo);
  }
}
