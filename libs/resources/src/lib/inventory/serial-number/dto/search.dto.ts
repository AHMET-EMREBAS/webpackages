import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { SerialNumber } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSerialNumberDto implements SearchDto<SerialNumber> {
  @SearchProperty<SerialNumber>(['name'])
  search: FindOptionsWhere<SerialNumber>;
}
