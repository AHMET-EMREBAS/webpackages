import { InboxView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchInboxDto implements SearchDto<InboxView> {
  @SearchProperty<Inbox>([, , ,])
  search: FindOptionsWhere<Inbox>;
}
