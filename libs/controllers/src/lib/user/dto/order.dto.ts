import { User } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderUserDto extends CreateOrderDto<User>([
  'username',
  'password',
  'permissions',
  'department',
]) {}
