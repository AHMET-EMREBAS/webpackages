import { CustomerProfileView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCustomerProfileDto
  implements SearchDto<CustomerProfileView>
{
  @SearchProperty<CustomerProfileView>([
    'firstName',
    'lastName',
    'middleName',
    'userUsername',
  ])
  search: FindOptionsWhere<CustomerProfileView>;
}
