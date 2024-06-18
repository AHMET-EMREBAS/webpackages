import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { AccessToken } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchAccessTokenDto implements SearchDto<AccessToken> {
  @SearchProperty<AccessToken>(['name'])
  search: FindOptionsWhere<AccessToken>;
}
