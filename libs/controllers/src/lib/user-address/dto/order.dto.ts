import { UserAddress } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderUserAddressDto extends CreateOrderDto<UserAddress>([]) {}
