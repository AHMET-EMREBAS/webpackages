import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Customer } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCustomerDto implements SearchDto<Customer> {
  @SearchProperty<Customer>(['name'])
  search: FindOptionsWhere<Customer>;
}
