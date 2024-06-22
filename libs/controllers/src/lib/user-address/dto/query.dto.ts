import { UserAddressView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryUserAddressDto
  extends BaseQueryDto
  implements QueryDto<UserAddressView>
{
  @QueryProperty() street: string;
  @QueryProperty() city: string;
  @QueryProperty() state: string;
  @QueryProperty() zip: string;
  @QueryProperty() username: string;
}
