import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Discount } from '../entities';

@Exclude()
export class QueryDiscountDto
  extends BaseQueryDto
  implements QueryDto<Discount>
{
  @QueryProperty() name!: string;
}
