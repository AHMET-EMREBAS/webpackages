import { Address } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderAddressDto extends CreateOrderDto<Address>([
  'street',
  'city',
  'state',
  'zip',
]) {}
