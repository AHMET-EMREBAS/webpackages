import { Product } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchProductDto implements SearchDto<Product> {
  @SearchProperty<Product>([])
  search: FindOptionsWhere<Product>;
}
