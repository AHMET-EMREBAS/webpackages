import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { ClockIn } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchClockInDto implements SearchDto<ClockIn> {
  @SearchProperty<ClockIn>(['startDate', 'endDate'])
  search: FindOptionsWhere<ClockIn>;
}
