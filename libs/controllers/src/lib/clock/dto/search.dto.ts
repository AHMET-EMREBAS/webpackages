import { ClockView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchClockDto implements SearchDto<ClockView> {
  @SearchProperty<ClockView>(['starDate', 'endDate', 'userUsername'])
  search: FindOptionsWhere<ClockView>;
}
