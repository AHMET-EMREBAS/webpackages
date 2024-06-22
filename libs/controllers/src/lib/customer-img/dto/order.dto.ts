import { CustomerImgView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderCustomerImgDto extends CreateOrderDto<CustomerImgView>([
  'title',
  'generatedName',
  'userUsername',
]) {}
