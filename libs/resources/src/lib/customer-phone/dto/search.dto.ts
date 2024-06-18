import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { CustomerPhone } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCustomerPhoneDto implements SearchDto<CustomerPhone> {
  @SearchProperty<CustomerPhone>(['name'])
  search: FindOptionsWhere<CustomerPhone>;
}
