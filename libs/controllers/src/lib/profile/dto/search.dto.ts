import { Profile } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchProfileDto implements SearchDto<Profile> {
  @SearchProperty<Profile>([])
  search: FindOptionsWhere<Profile>;
}
