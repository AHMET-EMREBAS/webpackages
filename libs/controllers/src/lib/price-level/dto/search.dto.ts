import { PriceLevel } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchPriceLevelDto implements SearchDto<PriceLevel> {
  @SearchProperty<PriceLevel>([])
  search: FindOptionsWhere<PriceLevel>;
}
