import { UserProfileView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchUserProfileDto implements SearchDto<UserProfileView> {
  @SearchProperty<UserProfileView>(['firstName', 'lastName', 'middleName'])
  search: FindOptionsWhere<UserProfileView>;
}
