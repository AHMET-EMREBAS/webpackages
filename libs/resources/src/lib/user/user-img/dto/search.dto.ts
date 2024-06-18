import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { UserImg } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchUserImgDto implements SearchDto<UserImg> {
  @SearchProperty<UserImg>(['name'])
  search: FindOptionsWhere<UserImg>;
}
