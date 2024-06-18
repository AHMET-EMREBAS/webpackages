import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Img } from '../entities';

@Exclude()
export class OrderImgDto extends CreateOrderDto<Img>(['name']) {}
