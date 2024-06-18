import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { User } from '../entities';

@Exclude()
export class OrderUserDto extends CreateOrderDto<User>(['username']) {}
