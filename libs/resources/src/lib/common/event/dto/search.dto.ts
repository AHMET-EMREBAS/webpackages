import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Event } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchEventDto implements SearchDto<Event> {
  @SearchProperty<Event>(['name'])
  search: FindOptionsWhere<Event>;
}
