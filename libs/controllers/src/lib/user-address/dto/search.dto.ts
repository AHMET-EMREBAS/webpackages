import { UserAddress } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchUserAddressDto implements SearchDto<UserAddress> {
  @SearchProperty<UserAddress>(['street', 'city', 'state', 'zip', 'user'])
  search: FindOptionsWhere<UserAddress>;
}
