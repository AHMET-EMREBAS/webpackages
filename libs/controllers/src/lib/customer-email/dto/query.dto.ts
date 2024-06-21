import { CustomerEmail } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryCustomerEmailDto
  extends BaseQueryDto
  implements QueryDto<CustomerEmail>
{
  @QueryProperty() email: string;
  @QueryProperty() user: string;
}
