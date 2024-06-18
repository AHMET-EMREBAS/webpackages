import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { PriceLevel } from '../entities';

@Exclude()
export class QueryPriceLevelDto
  extends BaseQueryDto
  implements QueryDto<PriceLevel>
{
  @QueryProperty() name!: string;
}
