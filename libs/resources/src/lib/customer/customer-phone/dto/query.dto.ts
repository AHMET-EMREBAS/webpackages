import { Exclude } from 'class-transformer';
import { QueryPhoneDto } from '../../../common';

@Exclude()
export class QueryCustomerPhoneDto extends QueryPhoneDto {
  @Exclude() user: string;
}
