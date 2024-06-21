import { CustomerProfile } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderCustomerProfileDto extends CreateOrderDto<CustomerProfile>([
  'firstName',
  'lastName',
  'middleName',
  'user',
]) {}