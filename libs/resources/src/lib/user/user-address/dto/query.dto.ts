import { Exclude } from 'class-transformer';
import { QueryAddressDto } from '../../../common';

@Exclude()
export class QueryUserAddressDto extends QueryAddressDto {
  @Exclude() user: string;
}
