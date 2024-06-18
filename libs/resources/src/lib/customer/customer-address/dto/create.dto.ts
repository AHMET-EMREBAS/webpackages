import { Exclude } from 'class-transformer';
import { CreateAddressDto } from '../../../common';

@Exclude()
export class CreateCustomerAddressDto extends CreateAddressDto {}
