import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Email } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchEmailDto implements SearchDto<Email> {
  @SearchProperty<Email>(['email'])
  search: FindOptionsWhere<Email>;
}
