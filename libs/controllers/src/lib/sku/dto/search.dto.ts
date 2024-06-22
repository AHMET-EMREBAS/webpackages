import { SkuView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSkuDto implements SearchDto<SkuView> {
  @SearchProperty<SkuView>(['name', 'description', 'sku', 'productUpc'])
  search: FindOptionsWhere<SkuView>;
}
