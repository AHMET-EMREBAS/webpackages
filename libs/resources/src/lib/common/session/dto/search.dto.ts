import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Session } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSessionDto implements SearchDto<Session> {
  @SearchProperty<Session>(['deviceId'])
  search: FindOptionsWhere<Session>;
}
