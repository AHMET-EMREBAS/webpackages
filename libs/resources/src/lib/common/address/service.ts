import { BaseEntityService } from '@webpackages/core';
import { Address } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddressService extends BaseEntityService<Address> {
  constructor(@InjectRepository(Address) repo: Repository<Address>) {
    super(repo);
  }
}
