import { PhoneView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderPhoneDto extends CreateOrderDto<PhoneView>(['phone']) {}
