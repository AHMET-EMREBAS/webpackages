import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Sprint } from '../entities';

@Exclude()
export class OrderSprintDto extends CreateOrderDto<Sprint>(['name']) {}
