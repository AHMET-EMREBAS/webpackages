import { CustomerImg } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryCustomerImgDto
  extends BaseQueryDto
  implements QueryDto<CustomerImg>
{
  @QueryProperty() title: string;
  @QueryProperty() generatedName: string;
  @QueryProperty() user: string;
}
