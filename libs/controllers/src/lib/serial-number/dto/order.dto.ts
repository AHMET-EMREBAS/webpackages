import { SerialNumberView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderSerialNumberDto extends CreateOrderDto<SerialNumberView>([
  'serialNumber',
  'required',
  'type',
  'prefix',
  'suffix',
  'skuSku',
  'skuName',
]) {}
