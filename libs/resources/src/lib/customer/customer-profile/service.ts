import { BaseEntityService } from '@webpackages/core';
import { CustomerProfile } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerProfileService extends BaseEntityService<CustomerProfile> {
  constructor(
    @InjectRepository(CustomerProfile) repo: Repository<CustomerProfile>
  ) {
    super(repo);
  }
}
