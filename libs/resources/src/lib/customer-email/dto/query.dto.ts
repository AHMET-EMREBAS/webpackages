import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { CustomerEmail } from '../entities';

@Exclude()
export class QueryCustomerEmailDto
  extends BaseQueryDto
  implements QueryDto<CustomerEmail>
{
  @QueryProperty() name!: string;
}
