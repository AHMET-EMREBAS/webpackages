import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { UserImage } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchUserImageDto implements SearchDto<UserImage> {
  @SearchProperty<UserImage>(['name'])
  search: FindOptionsWhere<UserImage>;
}
