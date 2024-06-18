import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Phone } from '../entities';

@Exclude()
export class OrderPhoneDto extends CreateOrderDto<Phone>(['phone']) {}
