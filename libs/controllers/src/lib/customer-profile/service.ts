import { BaseEntityService } from '@webpackages/database';
import { CustomerProfile, CustomerProfileView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerProfileService extends BaseEntityService<
  CustomerProfile,
  CustomerProfileView
> {
  constructor(
    @InjectRepository(CustomerProfile) repo: Repository<CustomerProfile>,
    @InjectRepository(CustomerProfileView) view: Repository<CustomerProfileView>
  ) {
    super(repo, view);
  }
}
