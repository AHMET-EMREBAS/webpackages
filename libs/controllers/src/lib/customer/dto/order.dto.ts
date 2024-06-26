import { CustomerView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderCustomerDto extends CreateOrderDto<CustomerView>([
  'username',
  'password',
  'permissions',
  'priceLevelName',
]) {}
