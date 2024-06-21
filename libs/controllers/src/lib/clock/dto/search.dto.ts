import { Clock } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchClockDto implements SearchDto<Clock> {
  @SearchProperty<Clock>([])
  search: FindOptionsWhere<Clock>;
}
