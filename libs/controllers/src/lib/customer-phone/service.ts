import { BaseEntityService } from '@webpackages/database';
import { CustomerPhone } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerPhoneService extends BaseEntityService<CustomerPhone> {
  constructor(
    @InjectRepository(CustomerPhone) repo: Repository<CustomerPhone>
  ) {
    super(repo);
  }
}
