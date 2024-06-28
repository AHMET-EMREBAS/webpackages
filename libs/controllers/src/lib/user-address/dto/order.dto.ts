import { UserAddressView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderUserAddressDto extends CreateOrderDto<UserAddressView>([
  'street',
  'city',
  'state',
  'zip',
]) {}
