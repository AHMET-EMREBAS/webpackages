import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Inbox } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchInboxDto implements SearchDto<Inbox> {
  @SearchProperty<Inbox>(['name'])
  search: FindOptionsWhere<Inbox>;
}
