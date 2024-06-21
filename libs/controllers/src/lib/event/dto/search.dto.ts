import { Event } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchEventDto implements SearchDto<Event> {
  @SearchProperty<Event>(['name', 'payload'])
  search: FindOptionsWhere<Event>;
}
