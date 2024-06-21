import { Supplier } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSupplierDto implements SearchDto<Supplier> {
  @SearchProperty<Supplier>(['name'])
  search: FindOptionsWhere<Supplier>;
}
