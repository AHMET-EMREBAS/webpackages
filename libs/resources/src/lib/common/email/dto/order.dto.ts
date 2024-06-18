import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Email } from '../entities';

@Exclude()
export class OrderEmailDto extends CreateOrderDto<Email>(['email']) {}
