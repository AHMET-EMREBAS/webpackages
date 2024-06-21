import { UserProfile } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchUserProfileDto implements SearchDto<UserProfile> {
  @SearchProperty<UserProfile>(['firstName', 'lastName', 'middleName', 'user'])
  search: FindOptionsWhere<UserProfile>;
}
