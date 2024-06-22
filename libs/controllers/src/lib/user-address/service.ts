import { BaseEntityService } from '@webpackages/database';
import { UserAddress, UserAddressView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserAddressService extends BaseEntityService<
  UserAddress,
  UserAddressView
> {
  constructor(
    @InjectRepository(UserAddress) repo: Repository<UserAddress>,
    @InjectRepository(UserAddressView) view: Repository<UserAddressView>
  ) {
    super(repo, view);
  }
}
