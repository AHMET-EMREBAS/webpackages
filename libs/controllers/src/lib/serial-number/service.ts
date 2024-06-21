import { BaseEntityService } from '@webpackages/database';
import { SerialNumber } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SerialNumberService extends BaseEntityService<SerialNumber> {
  constructor(@InjectRepository(SerialNumber) repo: Repository<SerialNumber>) {
    super(repo);
  }
}
