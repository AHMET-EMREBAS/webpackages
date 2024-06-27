import { CartView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderCartDto extends CreateOrderDto<CartView>([
  'complete',
  'customerUsername',
  'employeeUsername',
]) {}
