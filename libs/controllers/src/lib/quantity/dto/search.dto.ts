import { Quantity } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchQuantityDto implements SearchDto<Quantity> {
  @SearchProperty<Quantity>([])
  search: FindOptionsWhere<Quantity>;
}
