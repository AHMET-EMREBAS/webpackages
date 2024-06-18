import { Exclude } from 'class-transformer';
import { OrderPhoneDto } from '../../../common';

@Exclude()
export class OrderUserPhoneDto extends OrderPhoneDto {}
