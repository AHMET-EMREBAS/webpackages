import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { CustomerEmail } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCustomerEmailDto implements SearchDto<CustomerEmail> {
  @SearchProperty<CustomerEmail>(['name'])
  search: FindOptionsWhere<CustomerEmail>;
}
