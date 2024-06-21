import { ProductImg } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderProductImgDto extends CreateOrderDto<ProductImg>([]) {}
