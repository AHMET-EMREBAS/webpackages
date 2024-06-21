import { UserPhone } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchUserPhoneDto implements SearchDto<UserPhone> {
  @SearchProperty<UserPhone>(['phone', 'user'])
  search: FindOptionsWhere<UserPhone>;
}