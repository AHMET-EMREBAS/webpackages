import { UserAddress } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryUserAddressDto
  extends BaseQueryDto
  implements QueryDto<UserAddress> {}
