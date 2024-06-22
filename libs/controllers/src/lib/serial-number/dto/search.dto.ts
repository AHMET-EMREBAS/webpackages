import { SerialNumberView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSerialNumberDto implements SearchDto<SerialNumberView> {
  @SearchProperty<SerialNumber>([
    'serialNumber',
    'inStock',
    'generated',
    'skuSku',
    'skuName',
  ])
  search: FindOptionsWhere<SerialNumber>;
}
