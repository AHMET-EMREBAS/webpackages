import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { CustomerAddress } from '../entities';

@Exclude()
export class QueryCustomerAddressDto
  extends BaseQueryDto
  implements QueryDto<CustomerAddress>
{
  @QueryProperty() name!: string;
}
