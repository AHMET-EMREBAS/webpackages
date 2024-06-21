import { Manufacturer } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchManufacturerDto implements SearchDto<Manufacturer> {
  @SearchProperty<Manufacturer>(['name'])
  search: FindOptionsWhere<Manufacturer>;
}
