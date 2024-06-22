import { SessionView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSessionDto implements SearchDto<SessionView> {
  @SearchProperty<SessionView>(['deviceId', 'userUsername'])
  search: FindOptionsWhere<SessionView>;
}
