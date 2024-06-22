import { SupplierView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSupplierDto implements SearchDto<SupplierView> {
  @SearchProperty<SupplierView>(['name'])
  search: FindOptionsWhere<SupplierView>;
}
