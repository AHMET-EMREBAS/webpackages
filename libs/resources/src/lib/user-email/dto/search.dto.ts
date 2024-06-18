import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { UserEmail } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchUserEmailDto implements SearchDto<UserEmail> {
  @SearchProperty<UserEmail>(['name'])
  search: FindOptionsWhere<UserEmail>;
}
