import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { UserImg } from '../entities';

@Exclude()
export class OrderUserImgDto extends CreateOrderDto<UserImg>(['name']) {}
