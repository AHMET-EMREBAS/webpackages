import { Exclude } from 'class-transformer';
import { QueryProfileDto } from '../../../common';

@Exclude()
export class QueryCustomerProfileDto extends QueryProfileDto {
  @Exclude() user: string;
}
