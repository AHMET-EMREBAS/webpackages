import { Exclude } from 'class-transformer';
import { OrderEmailDto } from '../../../common';

@Exclude()
export class OrderUserEmailDto extends OrderEmailDto {}
