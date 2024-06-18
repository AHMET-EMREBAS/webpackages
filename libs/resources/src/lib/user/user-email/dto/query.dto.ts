import { Exclude } from 'class-transformer';
import { QueryEmailDto } from '../../../common';

@Exclude()
export class QueryUserEmailDto extends QueryEmailDto {
  @Exclude() user: string;
}
