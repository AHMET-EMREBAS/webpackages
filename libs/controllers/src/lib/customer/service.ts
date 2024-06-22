import { BaseEntityService } from '@webpackages/database';
import { Customer, CustomerView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService extends BaseEntityService<Customer, CustomerView> {
  constructor(
    @InjectRepository(Customer) repo: Repository<Customer>,
    @InjectRepository(CustomerView) view: Repository<CustomerView>
  ) {
    super(repo, view);
  }
}
