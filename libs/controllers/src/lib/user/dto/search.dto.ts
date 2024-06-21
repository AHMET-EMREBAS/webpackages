import { User } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchUserDto implements SearchDto<User> {
  @SearchProperty<User>(['username', 'passwrod', 'permissions', 'department'])
  search: FindOptionsWhere<User>;
}
