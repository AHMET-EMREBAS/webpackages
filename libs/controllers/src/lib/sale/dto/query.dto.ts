import { SaleView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QuerySaleDto extends BaseQueryDto implements QueryDto<SaleView> {
  @QueryProperty() subTotal: string;
  @QueryProperty() total: string;
  @QueryProperty() creditCardPayment: string;
  @QueryProperty() cashPayment: string;
  @QueryProperty() balancePayment: string;
  @QueryProperty() customerId: string;
  @QueryProperty() employeeId: string;
}
