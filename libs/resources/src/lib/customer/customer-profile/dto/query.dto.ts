import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { CustomerProfile } from '../entities';

@Exclude()
export class QueryCustomerProfileDto
  extends BaseQueryDto
  implements QueryDto<CustomerProfile>
{
  @QueryProperty() name!: string;
}
