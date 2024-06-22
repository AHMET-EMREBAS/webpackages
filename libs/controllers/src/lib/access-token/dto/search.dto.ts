import { AccessTokenView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchAccessTokenDto implements SearchDto<AccessTokenView> {
  @SearchProperty<AccessToken>(['name', 'token', 'userUsername'])
  search: FindOptionsWhere<AccessToken>;
}
