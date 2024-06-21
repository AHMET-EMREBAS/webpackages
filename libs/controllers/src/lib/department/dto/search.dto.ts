import { Department } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchDepartmentDto implements SearchDto<Department> {
  @SearchProperty<Department>(['name'])
  search: FindOptionsWhere<Department>;
}
