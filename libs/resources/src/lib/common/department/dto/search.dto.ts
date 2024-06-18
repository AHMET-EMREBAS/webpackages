import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Department } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchDepartmentDto implements SearchDto<Department> {
  @SearchProperty<Department>(['name'])
  search: FindOptionsWhere<Department>;
}
