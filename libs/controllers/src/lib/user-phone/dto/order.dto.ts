import { UserPhone } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderUserPhoneDto extends CreateOrderDto<UserPhone>([]) {}
