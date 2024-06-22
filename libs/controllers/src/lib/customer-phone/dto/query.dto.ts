import { CustomerPhoneView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryCustomerPhoneDto
  extends BaseQueryDto
  implements QueryDto<CustomerPhoneView>
{
  @QueryProperty() phone: string;
  @QueryProperty() username: string;
}
