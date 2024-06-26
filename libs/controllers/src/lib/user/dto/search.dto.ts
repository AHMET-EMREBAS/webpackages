import { UserView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchUserDto implements SearchDto<UserView> {
  @SearchProperty<UserView>([
    'username',
    'password',
    'permissions',
    'departmentName',
  ])
  search: FindOptionsWhere<UserView>;
}
