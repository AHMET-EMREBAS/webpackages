import { PriceLevelView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchPriceLevelDto implements SearchDto<PriceLevelView> {
  @SearchProperty<PriceLevelView>(['name', 'currency', 'taxrate'])
  search: FindOptionsWhere<PriceLevelView>;
}
