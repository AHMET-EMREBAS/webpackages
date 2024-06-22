import { CustomerAddressView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryCustomerAddressDto
  extends BaseQueryDto
  implements QueryDto<CustomerAddressView>
{
  @QueryProperty() street: string;
  @QueryProperty() city: string;
  @QueryProperty() state: string;
  @QueryProperty() zip: string;
  @QueryProperty() username: string;
}
