import { Exclude } from 'class-transformer';
import { QueryImgDto } from '../../../common';

@Exclude()
export class QueryUserImgDto extends QueryImgDto {
  @Exclude() user: string;
}
