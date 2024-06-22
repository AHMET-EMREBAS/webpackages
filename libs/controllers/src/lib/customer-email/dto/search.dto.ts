import { CustomerEmailView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCustomerEmailDto implements SearchDto<CustomerEmailView> {
  @SearchProperty<CustomerEmail>(['email', 'username'])
  search: FindOptionsWhere<CustomerEmail>;
}
