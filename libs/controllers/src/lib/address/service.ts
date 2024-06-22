import { BaseEntityService } from '@webpackages/database';
import { Address, AddressView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddressService extends BaseEntityService<Address, AddressView> {
  constructor(
    @InjectRepository(Address) repo: Repository<Address>,
    @InjectRepository(AddressView) view: Repository<AddressView>
  ) {
    super(repo, view);
  }
}
