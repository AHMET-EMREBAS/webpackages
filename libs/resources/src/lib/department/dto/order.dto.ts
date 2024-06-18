import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Department } from '../entities';

@Exclude()
export class OrderDepartmentDto extends CreateOrderDto<Department>(['name']) {}
