import { BaseEntityService } from '@webpackages/core';
import { CustomerAddress } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerAddressService extends BaseEntityService<CustomerAddress> {
  constructor(
    @InjectRepository(CustomerAddress) repo: Repository<CustomerAddress>
  ) {
    super(repo);
  }
}
