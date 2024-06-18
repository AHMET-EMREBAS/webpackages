import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Purchase } from '../entities';

@Exclude()
export class QueryPurchaseDto
  extends BaseQueryDto
  implements QueryDto<Purchase>
{
  @QueryProperty() name!: string;
}
