import { CustomerEmailView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryCustomerEmailDto
  extends BaseQueryDto
  implements QueryDto<CustomerEmailView>
{
  @QueryProperty() email: string;
  @QueryProperty() customerId: string;
  @QueryProperty() customerActive: string;
  @QueryProperty() customerUsername: string;
}
