import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { CustomerProfile } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCustomerProfileDto implements SearchDto<CustomerProfile> {
  @SearchProperty<CustomerProfile>(['name'])
  search: FindOptionsWhere<CustomerProfile>;
}
