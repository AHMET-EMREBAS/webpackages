import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { UserEmail } from '../entities';

@Exclude()
export class OrderUserEmailDto extends CreateOrderDto<UserEmail>(['name']) {}
