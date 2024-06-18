import { BaseEntityService } from '@webpackages/core';
import { Phone } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PhoneService extends BaseEntityService<Phone> {
  constructor(@InjectRepository(Phone) repo: Repository<Phone>) {
    super(repo);
  }
}
