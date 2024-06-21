import { BaseEntityService } from '@webpackages/database';
import { UserAddress } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserAddressService extends BaseEntityService<UserAddress> {
  constructor(@InjectRepository(UserAddress) repo: Repository<UserAddress>) {
    super(repo);
  }
}
