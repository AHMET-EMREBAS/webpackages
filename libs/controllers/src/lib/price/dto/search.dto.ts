import { PriceView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchPriceDto implements SearchDto<PriceView> {
  @SearchProperty<Price>(['price', 'cost', 'startDate', 'endDate', ,])
  search: FindOptionsWhere<Price>;
}
