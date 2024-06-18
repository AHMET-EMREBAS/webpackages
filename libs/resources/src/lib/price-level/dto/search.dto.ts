import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { PriceLevel } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchPriceLevelDto implements SearchDto<PriceLevel> {
  @SearchProperty<PriceLevel>(['name'])
  search: FindOptionsWhere<PriceLevel>;
}
