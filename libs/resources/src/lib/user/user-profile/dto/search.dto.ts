import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { UserProfile } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchUserProfileDto implements SearchDto<UserProfile> {
  @SearchProperty<UserProfile>(['name'])
  search: FindOptionsWhere<UserProfile>;
}
