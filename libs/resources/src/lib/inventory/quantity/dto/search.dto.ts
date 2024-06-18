import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Quantity } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchQuantityDto implements SearchDto<Quantity> {
  @SearchProperty<Quantity>(['name'])
  search: FindOptionsWhere<Quantity>;
}
