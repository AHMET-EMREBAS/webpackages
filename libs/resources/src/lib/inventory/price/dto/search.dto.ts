import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Price } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchPriceDto implements SearchDto<Price> {
  @SearchProperty<Price>(['name'])
  search: FindOptionsWhere<Price>;
}
