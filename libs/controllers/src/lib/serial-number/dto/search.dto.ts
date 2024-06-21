import { SerialNumber } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSerialNumberDto implements SearchDto<SerialNumber> {
  @SearchProperty<SerialNumber>(['serialNumber', 'inStock', 'generated', 'sku'])
  search: FindOptionsWhere<SerialNumber>;
}
