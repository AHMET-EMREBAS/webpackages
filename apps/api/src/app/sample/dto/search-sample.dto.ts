import { SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Sample } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSampleDto {
  @SearchProperty<Sample>(['name', 'dob'])
  search: FindOptionsWhere<Sample>;
}
