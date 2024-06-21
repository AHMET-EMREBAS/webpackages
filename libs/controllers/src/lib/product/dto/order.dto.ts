import { Product } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderProductDto extends CreateOrderDto<Product>([]) {}
