import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Address } from '../entities';

@Exclude()
export class OrderAddressDto extends CreateOrderDto<Address>([
  'street',
  'city',
  'state',
  'zip',
]) {}
