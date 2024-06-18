import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { CustomerImg } from '../entities';

@Exclude()
export class QueryCustomerImgDto
  extends BaseQueryDto
  implements QueryDto<CustomerImg>
{
  @QueryProperty() name!: string;
}
