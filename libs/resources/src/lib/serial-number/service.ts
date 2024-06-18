import { BaseEntityService } from '@webpackages/core';
import { SerialNumber } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SerialNumberService extends BaseEntityService<SerialNumber> {
  constructor(@InjectRepository(SerialNumber) repo: Repository<SerialNumber>) {
    super(repo);
  }
}
