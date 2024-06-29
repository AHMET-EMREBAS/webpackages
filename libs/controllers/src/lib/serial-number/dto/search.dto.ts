import { SerialNumberView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSerialNumberDto implements SearchDto<SerialNumberView> {
  @SearchProperty<SerialNumberView>([
    'serialNumber',
    'required',
    'type',
    'prefix',
    'suffix',
    'skuSku',
    'skuName',
  ])
  search: FindOptionsWhere<SerialNumberView>;
}
