import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { UserAddress } from '../entities';

@Exclude()
export class QueryUserAddressDto
  extends BaseQueryDto
  implements QueryDto<UserAddress>
{
  @QueryProperty() name!: string;
}
