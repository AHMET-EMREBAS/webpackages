import { Price } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchPriceDto implements SearchDto<Price> {
  @SearchProperty<Price>([])
  search: FindOptionsWhere<Price>;
}
