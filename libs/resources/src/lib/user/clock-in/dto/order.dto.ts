import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { ClockIn } from '../entities';

@Exclude()
export class OrderClockInDto extends CreateOrderDto<ClockIn>([]) {}
