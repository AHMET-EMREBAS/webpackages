import { AddressView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderAddressDto extends CreateOrderDto<AddressView>([
  'street',
  'city',
  'state',
  'zip',
]) {}
