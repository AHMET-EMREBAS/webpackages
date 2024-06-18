import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { CustomerAddress } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCustomerAddressDto implements SearchDto<CustomerAddress> {
  @SearchProperty<CustomerAddress>(['name'])
  search: FindOptionsWhere<CustomerAddress>;
}
