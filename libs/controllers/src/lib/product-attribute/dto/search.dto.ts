import { ProductAttributeView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchProductAttributeDto
  implements SearchDto<ProductAttributeView>
{
  @SearchProperty<ProductAttributeView>([
    'key',
    'value',
    'productName',
    'productUpc',
  ])
  search: FindOptionsWhere<ProductAttributeView>;
}
