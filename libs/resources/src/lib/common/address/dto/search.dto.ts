import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Address } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchAddressDto implements SearchDto<Address> {
  @SearchProperty<Address>(['street', 'city', 'state', 'zip'])
  search: FindOptionsWhere<Address>;
}
