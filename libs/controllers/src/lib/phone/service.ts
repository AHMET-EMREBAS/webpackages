import { BaseEntityService } from '@webpackages/database';
import { Phone, PhoneView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PhoneService extends BaseEntityService<Phone, PhoneView> {
  constructor(
    @InjectRepository(Phone) repo: Repository<Phone>,
    @InjectRepository(PhoneView) view: Repository<PhoneView>
  ) {
    super(repo, view);
  }
}
