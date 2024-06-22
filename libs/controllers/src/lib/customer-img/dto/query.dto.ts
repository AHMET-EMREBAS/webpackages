import { CustomerImgView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryCustomerImgDto
  extends BaseQueryDto
  implements QueryDto<CustomerImgView>
{
  @QueryProperty() title: string;
  @QueryProperty() generatedName: string;
  @QueryProperty() customerId: string;
  @QueryProperty() customerActive: string;
  @QueryProperty() customerUsername: string;
}
