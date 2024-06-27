import { CustomerAccountView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryCustomerAccountDto
  extends BaseQueryDto
  implements QueryDto<CustomerAccountView>
{
  @QueryProperty() blance: string;
  @QueryProperty() customerId: string;
  @QueryProperty() customerActive: string;
  @QueryProperty() customerUsername: string;
  @QueryProperty() priceLevelId: string;
  @QueryProperty() priceLevelActive: string;
  @QueryProperty() priceLevelName: string;
  @QueryProperty() priceLevelTaxrate: string;
  @QueryProperty() priceLevelCurrency: string;
}
