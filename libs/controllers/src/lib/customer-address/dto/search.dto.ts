import { CustomerAddress } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCustomerAddressDto implements SearchDto<CustomerAddress> {
  @SearchProperty<CustomerAddress>([])
  search: FindOptionsWhere<CustomerAddress>;
}
