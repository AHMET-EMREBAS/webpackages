import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Project } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchProjectDto implements SearchDto<Project> {
  @SearchProperty<Project>(['name'])
  search: FindOptionsWhere<Project>;
}
