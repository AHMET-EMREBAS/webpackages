import { SerialNumberView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderSerialNumberDto extends CreateOrderDto<SerialNumberView>([
  'required',
  'type',
  'prefix',
  'suffix',
  'serialNumber',
  'productName',
  'productUpc',
]) {}
