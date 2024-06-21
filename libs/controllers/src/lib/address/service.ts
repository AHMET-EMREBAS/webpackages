import { BaseEntityService } from '@webpackages/database';
import { Address } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddressService extends BaseEntityService<Address> {
  constructor(@InjectRepository(Address) repo: Repository<Address>) {
    super(repo);
  }
}
