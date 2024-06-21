import { UserImg } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderUserImgDto extends CreateOrderDto<UserImg>([]) {}
