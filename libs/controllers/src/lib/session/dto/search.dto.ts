import { Session } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSessionDto implements SearchDto<Session> {
  @SearchProperty<Session>([])
  search: FindOptionsWhere<Session>;
}
