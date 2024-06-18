import { Exclude } from 'class-transformer';
import { OrderAddressDto } from '../../../common';

@Exclude()
export class OrderUserAddressDto extends OrderAddressDto {}
