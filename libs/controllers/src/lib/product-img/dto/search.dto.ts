import { ProductImg } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchProductImgDto implements SearchDto<ProductImg> {
  @SearchProperty<ProductImg>(['title', 'generatedName', 'product'])
  search: FindOptionsWhere<ProductImg>;
}
