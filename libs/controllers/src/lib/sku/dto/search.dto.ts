import { Sku } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSkuDto implements SearchDto<Sku> {
  @SearchProperty<Sku>(['name', 'description', 'sku', 'product'])
  search: FindOptionsWhere<Sku>;
}
