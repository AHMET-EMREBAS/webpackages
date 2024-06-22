import { CustomerPhoneView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderCustomerPhoneDto extends CreateOrderDto<CustomerPhoneView>([
  'phone',
  'userUsername',
]) {}
