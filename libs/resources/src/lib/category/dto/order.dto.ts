import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Category } from '../entities';

@Exclude()
export class OrderCategoryDto extends CreateOrderDto<Category>(['name']) {}
