import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';


@Exclude()
export class OrderUserDto extends CreateOrderDto<User>(['name']) {}
