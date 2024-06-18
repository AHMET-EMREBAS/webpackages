import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Phone } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchPhoneDto implements SearchDto<Phone> {
  @SearchProperty<Phone>(['phone'])
  search: FindOptionsWhere<Phone>;
}
