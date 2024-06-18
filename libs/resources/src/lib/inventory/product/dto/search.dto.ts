import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Product } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchProductDto implements SearchDto<Product> {
  @SearchProperty<Product>(['name', 'upc', 'description', 'brand'])
  search: FindOptionsWhere<Product>;
}
