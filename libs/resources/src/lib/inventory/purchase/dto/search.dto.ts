import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Purchase } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchPurchaseDto implements SearchDto<Purchase> {
  @SearchProperty<Purchase>(['name'])
  search: FindOptionsWhere<Purchase>;
}
