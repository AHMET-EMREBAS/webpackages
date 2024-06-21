import { Email } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderEmailDto extends CreateOrderDto<Email>([]) {}
