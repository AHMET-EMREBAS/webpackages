import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Quantity } from '../entities';

@Exclude()
export class QueryQuantityDto
  extends BaseQueryDto
  implements QueryDto<Quantity>
{
  @QueryProperty() quantity: number;
  @Exclude() sku: unknown;
  @Exclude() store: unknown;
}
