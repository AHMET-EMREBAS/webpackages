import { CustomerProfileView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCustomerProfileDto
  implements SearchDto<CustomerProfileView>
{
  @SearchProperty<CustomerProfile>([
    'firstName',
    'lastName',
    'middleName',
    'username',
  ])
  search: FindOptionsWhere<CustomerProfile>;
}
