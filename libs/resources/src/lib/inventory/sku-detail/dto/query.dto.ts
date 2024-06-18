import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { SkuDetail } from '../entities';

@Exclude()
export class QuerySkuDetailDto
  extends BaseQueryDto
  implements QueryDto<SkuDetail>
{
  @Exclude() sku: unknown;
  @QueryProperty() key!: string;
  @QueryProperty() value!: string;
}
