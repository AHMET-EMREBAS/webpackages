import { Customer } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryCustomerDto
  extends BaseQueryDto
  implements QueryDto<Customer>
{
  @QueryProperty() username: string;
  @QueryProperty() passwrod: string;
  @QueryProperty() permissions: string;
  @QueryProperty() priceLevel: string;
}
