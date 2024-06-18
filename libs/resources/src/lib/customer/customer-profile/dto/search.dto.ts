import { Exclude } from 'class-transformer';
import { SearchProfileDto } from '../../../common';

@Exclude()
export class SearchCustomerProfileDto extends SearchProfileDto {}
