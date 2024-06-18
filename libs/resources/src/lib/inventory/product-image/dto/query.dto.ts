import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { ProductImage } from '../entities';

@Exclude()
export class QueryProductImageDto
  extends BaseQueryDto
  implements QueryDto<ProductImage>
{
  @QueryProperty() name!: string;
}
