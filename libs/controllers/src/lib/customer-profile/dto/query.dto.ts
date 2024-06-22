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
  @QueryProperty() userId: string;
  @QueryProperty() userActive: string;
  @QueryProperty() userUsername: string;
}
