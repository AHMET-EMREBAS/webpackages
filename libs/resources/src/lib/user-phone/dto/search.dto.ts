import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { UserPhone } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchUserPhoneDto implements SearchDto<UserPhone> {
  @SearchProperty<UserPhone>(['name'])
  search: FindOptionsWhere<UserPhone>;
}
