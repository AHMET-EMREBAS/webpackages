import { CategoryView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderCategoryDto extends CreateOrderDto<CategoryView>(['name']) {}
