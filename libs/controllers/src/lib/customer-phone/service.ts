import { BaseEntityService } from '@webpackages/database';
import { CustomerPhone, CustomerPhoneView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerPhoneService extends BaseEntityService<
  CustomerPhone,
  CustomerPhoneView
> {
  constructor(
    @InjectRepository(CustomerPhone) repo: Repository<CustomerPhone>,
    @InjectRepository(CustomerPhoneView) view: Repository<CustomerPhoneView>
  ) {
    super(repo, view);
  }
}
