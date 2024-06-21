import { CustomerPhone } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryCustomerPhoneDto
  extends BaseQueryDto
  implements QueryDto<CustomerPhone>
{
  @QueryProperty() phone: string;
  @QueryProperty() user: string;
}
