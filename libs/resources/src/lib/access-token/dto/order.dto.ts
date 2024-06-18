import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { AccessToken } from '../entities';

@Exclude()
export class OrderAccessTokenDto extends CreateOrderDto<AccessToken>([
  'name',
]) {}
