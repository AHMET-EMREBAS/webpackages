import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Supplier } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSupplierDto implements SearchDto<Supplier> {
  @SearchProperty<Supplier>(['name'])
  search: FindOptionsWhere<Supplier>;
}
