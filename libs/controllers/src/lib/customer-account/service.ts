import { BaseEntityService } from '@webpackages/database';
import { CustomerAccount, CustomerAccountView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerAccountService extends BaseEntityService<
  CustomerAccount,
  CustomerAccountView
> {
  constructor(
    @InjectRepository(CustomerAccount) repo: Repository<CustomerAccount>,
    @InjectRepository(CustomerAccountView) view: Repository<CustomerAccountView>
  ) {
    super(repo, view);
  }
}
