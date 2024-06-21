import { CustomerEmail } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCustomerEmailDto implements SearchDto<CustomerEmail> {
  @SearchProperty<CustomerEmail>([])
  search: FindOptionsWhere<CustomerEmail>;
}
