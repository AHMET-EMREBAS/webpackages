import { CustomerEmail } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderCustomerEmailDto extends CreateOrderDto<CustomerEmail>([
  'email',
  'user',
]) {}
