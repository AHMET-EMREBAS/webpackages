import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { UserAddress } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchUserAddressDto implements SearchDto<UserAddress> {
  @SearchProperty<UserAddress>(['name'])
  search: FindOptionsWhere<UserAddress>;
}
