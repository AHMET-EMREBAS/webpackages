import { Exclude } from 'class-transformer';
import { QueryImgDto } from '../../../common';

@Exclude()
export class QueryCustomerImgDto extends QueryImgDto {
  @Exclude() user: string;
}
