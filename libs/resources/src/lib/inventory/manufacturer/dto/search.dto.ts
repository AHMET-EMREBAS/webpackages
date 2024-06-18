import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Manufacturer } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchManufacturerDto implements SearchDto<Manufacturer> {
  @SearchProperty<Manufacturer>(['name'])
  search: FindOptionsWhere<Manufacturer>;
}
