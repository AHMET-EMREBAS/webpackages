import { CustomerView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryCustomerDto
  extends BaseQueryDto
  implements QueryDto<CustomerView>
{
  @QueryProperty() username: string;
  @QueryProperty() password: string;
  @QueryProperty() permissions: string;
  @QueryProperty() priceLevelId: string;
  @QueryProperty() priceLevelActive: string;
  @QueryProperty() priceLevelName: string;
}
