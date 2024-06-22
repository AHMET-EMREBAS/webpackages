import { ProductView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchProductDto implements SearchDto<ProductView> {
  @SearchProperty<ProductView>([
    'name',
    'description',
    'upc',
    'categoryName',
    'supplierName',
  ])
  search: FindOptionsWhere<ProductView>;
}
