import { AddressView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchAddressDto implements SearchDto<AddressView> {
  @SearchProperty<AddressView>(['street', 'city', 'state', 'zip'])
  search: FindOptionsWhere<AddressView>;
}
