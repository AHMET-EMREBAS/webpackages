import { BaseEntityService } from '@webpackages/database';
import { CustomerEmail, CustomerEmailView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerEmailService extends BaseEntityService<
  CustomerEmail,
  CustomerEmailView
> {
  constructor(
    @InjectRepository(CustomerEmail) repo: Repository<CustomerEmail>,
    @InjectRepository(CustomerEmailView) view: Repository<CustomerEmailView>
  ) {
    super(repo, view);
  }
}
