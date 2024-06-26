import { CustomerAddressView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderCustomerAddressDto extends CreateOrderDto<CustomerAddressView>(
  ['street', 'city', 'state', 'zip', 'customerUsername']
) {}
