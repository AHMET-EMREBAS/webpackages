import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Sku } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSkuDto implements SearchDto<Sku> {
  @SearchProperty<Sku>(['name', 'description', 'sku'])
  search: FindOptionsWhere<Sku>;
}
