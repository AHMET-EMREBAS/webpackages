import { SprintView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSprintDto implements SearchDto<SprintView> {
  @SearchProperty<SprintView>(['name', 'description', 'projectName'])
  search: FindOptionsWhere<SprintView>;
}
