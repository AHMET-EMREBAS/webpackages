import { ProductImgView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchProductImgDto implements SearchDto<ProductImgView> {
  @SearchProperty<ProductImg>([
    'title',
    'generatedName',
    'productName',
    'productUpc',
  ])
  search: FindOptionsWhere<ProductImg>;
}
