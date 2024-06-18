import { Exclude } from 'class-transformer';
import { OrderImgDto } from '../../../common';

@Exclude()
export class OrderCustomerImgDto extends OrderImgDto {}
