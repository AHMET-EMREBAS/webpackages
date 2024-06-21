import { CustomerPhone } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCustomerPhoneDto implements SearchDto<CustomerPhone> {
  @SearchProperty<CustomerPhone>(['phone', 'user'])
  search: FindOptionsWhere<CustomerPhone>;
}