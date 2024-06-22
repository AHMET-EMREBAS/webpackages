import { CustomerProfileView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryCustomerProfileDto
  extends BaseQueryDto
  implements QueryDto<CustomerProfileView>
{
  @QueryProperty() firstName: string;
  @QueryProperty() lastName: string;
  @QueryProperty() middleName: string;
  @QueryProperty() customerId: string;
  @QueryProperty() customerActive: string;
  @QueryProperty() customerUsername: string;
}
