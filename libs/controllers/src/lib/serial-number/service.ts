import { BaseEntityService } from '@webpackages/database';
import { SerialNumber, SerialNumberView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SerialNumberService extends BaseEntityService<
  SerialNumber,
  SerialNumberView
> {
  constructor(
    @InjectRepository(SerialNumber) repo: Repository<SerialNumber>,
    @InjectRepository(SerialNumberView) view: Repository<SerialNumberView>
  ) {
    super(repo, view);
  }
}
