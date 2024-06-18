import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { CustomerImg } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCustomerImgDto implements SearchDto<CustomerImg> {
  @SearchProperty<CustomerImg>(['name'])
  search: FindOptionsWhere<CustomerImg>;
}
