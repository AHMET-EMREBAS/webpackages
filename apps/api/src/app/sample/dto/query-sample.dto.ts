import { QueryProperty, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Sample } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class QuerySampleDto {
  @QueryProperty() name!: string;
}

@Exclude()
export class SearchSampleDto {
  @SearchProperty<Sample>(['name'])
  search: FindOptionsWhere<Sample>;
}
