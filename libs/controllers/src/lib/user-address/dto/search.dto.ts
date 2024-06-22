import { UserAddressView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchUserAddressDto implements SearchDto<UserAddressView> {
  @SearchProperty<UserAddress>(['street', 'city', 'state', 'zip', 'username'])
  search: FindOptionsWhere<UserAddress>;
}
