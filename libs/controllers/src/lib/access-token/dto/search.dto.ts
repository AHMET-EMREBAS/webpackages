import { AccessToken } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchAccessTokenDto implements SearchDto<AccessToken> {
  @SearchProperty<AccessToken>(['name', 'token', 'user'])
  search: FindOptionsWhere<AccessToken>;
}
