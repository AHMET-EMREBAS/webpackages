import { ProjectView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchProjectDto implements SearchDto<ProjectView> {
  @SearchProperty<Project>(['name'])
  search: FindOptionsWhere<Project>;
}
