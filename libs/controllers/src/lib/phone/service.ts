import { BaseEntityService } from '@webpackages/database';
import { Phone } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PhoneService extends BaseEntityService<Phone> {
  constructor(@InjectRepository(Phone) repo: Repository<Phone>) {
    super(repo);
  }
}
