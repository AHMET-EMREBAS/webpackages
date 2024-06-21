import { CustomerAddress } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderCustomerAddressDto extends CreateOrderDto<CustomerAddress>([
  'street',
  'city',
  'state',
  'zip',
  'user',
]) {}
