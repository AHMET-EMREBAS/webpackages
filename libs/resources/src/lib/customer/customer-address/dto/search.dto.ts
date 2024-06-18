import { Exclude } from 'class-transformer';
import { SearchAddressDto } from '../../../common';

@Exclude()
export class SearchCustomerAddressDto extends SearchAddressDto {}
