import { CustomerProfile } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryCustomerProfileDto
  extends BaseQueryDto
  implements QueryDto<CustomerProfile>
{
  @QueryProperty() firstName: string;
  @QueryProperty() lastName: string;
  @QueryProperty() middleName: string;
  @QueryProperty() user: string;
}
