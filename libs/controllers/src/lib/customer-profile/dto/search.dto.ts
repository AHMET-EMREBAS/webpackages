import { CustomerProfile } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCustomerProfileDto implements SearchDto<CustomerProfile> {
  @SearchProperty<CustomerProfile>([
    'firstName',
    'lastName',
    'middleName',
    'user',
  ])
  search: FindOptionsWhere<CustomerProfile>;
}
