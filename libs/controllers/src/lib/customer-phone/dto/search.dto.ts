import { CustomerPhoneView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCustomerPhoneDto implements SearchDto<CustomerPhoneView> {
  @SearchProperty<CustomerPhone>(['phone', 'username'])
  search: FindOptionsWhere<CustomerPhone>;
}
