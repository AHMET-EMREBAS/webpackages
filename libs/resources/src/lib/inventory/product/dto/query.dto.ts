import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Product } from '../entities';

@Exclude()
export class QueryProductDto extends BaseQueryDto implements QueryDto<Product> {
  @QueryProperty() description: string;
  @QueryProperty() upc: string;
  @QueryProperty() brand: string;
  @QueryProperty() name!: string;

  @Exclude() supplier: string;
  @Exclude() category: string;
}
