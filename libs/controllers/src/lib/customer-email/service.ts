import { BaseEntityService } from '@webpackages/database';
import { CustomerEmail } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerEmailService extends BaseEntityService<CustomerEmail> {
  constructor(
    @InjectRepository(CustomerEmail) repo: Repository<CustomerEmail>
  ) {
    super(repo);
  }
}
