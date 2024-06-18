import { Exclude } from 'class-transformer';
import { QueryPhoneDto } from '../../../common';

@Exclude()
export class QueryUserPhoneDto extends QueryPhoneDto {
  @Exclude() user: string;
}
