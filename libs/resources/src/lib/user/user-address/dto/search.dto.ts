import { Exclude } from 'class-transformer';
import { SearchAddressDto } from '../../../common';

@Exclude()
export class SearchUserAddressDto extends SearchAddressDto {}
