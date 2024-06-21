import { Sprint } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSprintDto implements SearchDto<Sprint> {
  @SearchProperty<Sprint>(['name', 'project'])
  search: FindOptionsWhere<Sprint>;
}
