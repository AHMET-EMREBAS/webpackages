import { Exclude } from 'class-transformer';
import { OrderProductDto } from '../../../inventory';

@Exclude()
export class OrderUserProfileDto extends OrderProductDto {}
