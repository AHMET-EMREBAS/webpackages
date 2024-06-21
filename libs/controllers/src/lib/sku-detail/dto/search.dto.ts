import { SkuDetail } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSkuDetailDto implements SearchDto<SkuDetail> {
  @SearchProperty<SkuDetail>(['color', 'height', 'width', 'weight', 'manual'])
  search: FindOptionsWhere<SkuDetail>;
}