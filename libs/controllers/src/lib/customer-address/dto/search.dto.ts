import { CustomerAddressView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCustomerAddressDto
  implements SearchDto<CustomerAddressView>
{
  @SearchProperty<CustomerAddress>([
    'street',
    'city',
    'state',
    'zip',
    'customerUsername',
  ])
  search: FindOptionsWhere<CustomerAddress>;
}
