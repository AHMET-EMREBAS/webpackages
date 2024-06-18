import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Sprint } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSprintDto implements SearchDto<Sprint> {
  @SearchProperty<Sprint>(['name'])
  search: FindOptionsWhere<Sprint>;
}
