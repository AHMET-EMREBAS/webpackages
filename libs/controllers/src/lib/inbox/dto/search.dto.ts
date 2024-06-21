import { Inbox } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchInboxDto implements SearchDto<Inbox> {
  @SearchProperty<Inbox>(['user', 'sent', 'received'])
  search: FindOptionsWhere<Inbox>;
}
