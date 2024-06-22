import { CustomerProfileView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderCustomerProfileDto extends CreateOrderDto<CustomerProfileView>(
  ['firstName', 'lastName', 'middleName', 'userUsername']
) {}
