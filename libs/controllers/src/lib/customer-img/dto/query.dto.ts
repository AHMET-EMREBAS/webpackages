import { CustomerImg } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryCustomerImgDto
  extends BaseQueryDto
  implements QueryDto<CustomerImg> {}
