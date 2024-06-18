import { Exclude } from 'class-transformer';
import { SearchPhoneDto } from '../../../common';

@Exclude()
export class SearchUserPhoneDto extends SearchPhoneDto {}
