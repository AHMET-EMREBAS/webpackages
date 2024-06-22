import { UserEmailView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchUserEmailDto implements SearchDto<UserEmailView> {
  @SearchProperty<UserEmail>(['email', 'username'])
  search: FindOptionsWhere<UserEmail>;
}
