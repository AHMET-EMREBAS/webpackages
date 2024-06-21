import { Img } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderImgDto extends CreateOrderDto<Img>([]) {}
