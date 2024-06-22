import { BaseEntityService } from '@webpackages/database';
import { CustomerAddress, CustomerAddressView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerAddressService extends BaseEntityService<
  CustomerAddress,
  CustomerAddressView
> {
  constructor(
    @InjectRepository(CustomerAddress) repo: Repository<CustomerAddress>,
    @InjectRepository(CustomerAddressView) view: Repository<CustomerAddressView>
  ) {
    super(repo, view);
  }
}
