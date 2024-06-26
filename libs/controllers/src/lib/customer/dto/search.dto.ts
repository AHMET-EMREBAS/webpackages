import { CustomerView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCustomerDto implements SearchDto<CustomerView> {
  @SearchProperty<CustomerView>([
    'username',
    'password',
    'permissions',
    'priceLevelName',
  ])
  search: FindOptionsWhere<CustomerView>;
}
