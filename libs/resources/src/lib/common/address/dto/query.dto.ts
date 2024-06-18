import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Address } from '../entities';

@Exclude()
export class QueryAddressDto extends BaseQueryDto implements QueryDto<Address> {
  @QueryProperty() street: string;
  @QueryProperty() city: string;
  @QueryProperty() state: string;
  @QueryProperty() country: string;
  @QueryProperty() zip: string;
}
