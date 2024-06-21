import { AppEvent } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchAppEventDto implements SearchDto<AppEvent> {
  @SearchProperty<AppEvent>(['name', 'payload'])
  search: FindOptionsWhere<AppEvent>;
}