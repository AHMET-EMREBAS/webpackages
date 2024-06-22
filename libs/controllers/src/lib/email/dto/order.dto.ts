import { EmailView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderEmailDto extends CreateOrderDto<EmailView>(['email']) {}
