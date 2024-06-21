import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { User } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchUserDto implements SearchDto<User> {
  @SearchProperty<User>(['name'])
  search: FindOptionsWhere<User>;
}
