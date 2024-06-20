import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { User } from './entity';

@Exclude()
export class OrderUserDto extends CreateOrderDto<User>(['username']) {}
