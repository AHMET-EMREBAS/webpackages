import { Customer } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCustomerDto implements SearchDto<Customer> {
  @SearchProperty<Customer>([])
  search: FindOptionsWhere<Customer>;
}
