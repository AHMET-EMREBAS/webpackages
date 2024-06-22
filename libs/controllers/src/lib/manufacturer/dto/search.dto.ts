import { ManufacturerView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchManufacturerDto implements SearchDto<ManufacturerView> {
  @SearchProperty<ManufacturerView>(['name'])
  search: FindOptionsWhere<ManufacturerView>;
}
