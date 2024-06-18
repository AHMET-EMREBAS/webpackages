import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { CustomerPhone } from '../entities';

@Exclude()
export class QueryCustomerPhoneDto
  extends BaseQueryDto
  implements QueryDto<CustomerPhone>
{
  @QueryProperty() name!: string;
}
