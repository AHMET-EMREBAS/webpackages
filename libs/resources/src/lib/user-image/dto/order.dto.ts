import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { UserImage } from '../entities';

@Exclude()
export class OrderUserImageDto extends CreateOrderDto<UserImage>(['name']) {}
