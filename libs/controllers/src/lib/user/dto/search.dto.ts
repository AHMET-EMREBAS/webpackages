import { UserView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchUserDto implements SearchDto<UserView> {
  @SearchProperty<User>(['username', 'password', 'permissions', 'name'])
  search: FindOptionsWhere<User>;
}
