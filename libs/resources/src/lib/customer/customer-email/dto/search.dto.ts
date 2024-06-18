import { Exclude } from 'class-transformer';
import { SearchEmailDto } from '../../../common';

@Exclude()
export class SearchCustomerEmailDto extends SearchEmailDto {}
