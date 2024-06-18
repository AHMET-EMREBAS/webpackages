import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Profile } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchProfileDto implements SearchDto<Profile> {
  @SearchProperty<Profile>([
    'firstName',
    'middleName',
    'lastName',
    'occupation',
    'profileImg',
  ])
  search: FindOptionsWhere<Profile>;
}
