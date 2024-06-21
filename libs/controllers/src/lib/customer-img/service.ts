import { BaseEntityService } from '@webpackages/database';
import { CustomerImg } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerImgService extends BaseEntityService<CustomerImg> {
  constructor(@InjectRepository(CustomerImg) repo: Repository<CustomerImg>) {
    super(repo);
  }
}
