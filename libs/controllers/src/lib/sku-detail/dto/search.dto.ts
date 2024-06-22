import { SkuDetailView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSkuDetailDto implements SearchDto<SkuDetailView> {
  @SearchProperty<SkuDetailView>([
    'color',
    'height',
    'width',
    'weight',
    'manual',
    'make',
    'model',
    'notes',
    'website',
    'manufacturer',
    'highlight',
    'skuSku',
    'skuName',
  ])
  search: FindOptionsWhere<SkuDetailView>;
}
