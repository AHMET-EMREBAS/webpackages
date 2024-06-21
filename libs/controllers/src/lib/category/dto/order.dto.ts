import { Category } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderCategoryDto extends CreateOrderDto<Category>([]) {}
