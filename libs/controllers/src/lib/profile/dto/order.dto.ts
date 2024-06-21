import { Profile } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderProfileDto extends CreateOrderDto<Profile>([
  'firstName',
  'lastName',
  'middleName',
]) {}
