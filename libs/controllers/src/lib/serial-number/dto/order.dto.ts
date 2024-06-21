import { SerialNumber } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderSerialNumberDto extends CreateOrderDto<SerialNumber>([]) {}
