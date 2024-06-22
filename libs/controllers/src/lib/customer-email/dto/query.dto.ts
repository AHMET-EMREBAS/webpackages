import { CustomerEmailView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryCustomerEmailDto
  extends BaseQueryDto
  implements QueryDto<CustomerEmailView>
{
  @QueryProperty() email: string;
  @QueryProperty() userId: string;
  @QueryProperty() userActive: string;
  @QueryProperty() userUsername: string;
}
