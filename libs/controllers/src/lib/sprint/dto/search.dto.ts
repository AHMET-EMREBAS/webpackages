import { SprintView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSprintDto implements SearchDto<SprintView> {
  @SearchProperty<Sprint>(['name', 'description', 'projectName'])
  search: FindOptionsWhere<Sprint>;
}
