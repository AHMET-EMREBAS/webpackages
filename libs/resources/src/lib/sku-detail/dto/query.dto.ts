import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { SkuDetail } from '../entities';

@Exclude()
export class QuerySkuDetailDto
  extends BaseQueryDto
  implements QueryDto<SkuDetail>
{
  @QueryProperty() name!: string;
}
