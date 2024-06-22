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
  @QueryProperty() userId: string;
  @QueryProperty() userActive: string;
  @QueryProperty() userUsername: string;
}
