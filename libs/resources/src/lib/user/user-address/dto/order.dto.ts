import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { UserAddress } from '../entities';

@Exclude()
export class OrderUserAddressDto extends CreateOrderDto<UserAddress>([
  'name',
]) {}
