import { Product } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryProductDto extends BaseQueryDto implements QueryDto<Product> {
  @QueryProperty() name: string;
  @QueryProperty() description: string;
  @QueryProperty() upc: string;
  @QueryProperty() category: string;
  @QueryProperty() supplier: string;
}
