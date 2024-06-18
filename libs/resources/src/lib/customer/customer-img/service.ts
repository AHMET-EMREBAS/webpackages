import { BaseEntityService } from '@webpackages/core';
import { CustomerImg } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerImgService extends BaseEntityService<CustomerImg> {
  constructor(@InjectRepository(CustomerImg) repo: Repository<CustomerImg>) {
    super(repo);
  }
}
