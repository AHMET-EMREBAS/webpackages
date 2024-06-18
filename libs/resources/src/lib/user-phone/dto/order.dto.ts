import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { UserPhone } from '../entities';

@Exclude()
export class OrderUserPhoneDto extends CreateOrderDto<UserPhone>(['name']) {}
