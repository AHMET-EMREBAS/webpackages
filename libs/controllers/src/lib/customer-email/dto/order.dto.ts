import { CustomerEmailView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderCustomerEmailDto extends CreateOrderDto<CustomerEmailView>([
  'email',
  'customerUsername',
]) {}
