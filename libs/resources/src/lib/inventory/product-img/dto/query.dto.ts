import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { ProductImg } from '../entities';

@Exclude()
export class QueryProductImgDto
  extends BaseQueryDto
  implements QueryDto<ProductImg>
{
  @QueryProperty() name!: string;
}
