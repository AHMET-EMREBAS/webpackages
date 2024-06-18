import { Exclude } from 'class-transformer';
import { QueryImgDto } from '../../../common';

@Exclude()
export class QueryProductImgDto extends QueryImgDto {
  @Exclude() product: unknown;
}
