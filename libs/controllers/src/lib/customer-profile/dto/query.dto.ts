import { CustomerProfile } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryCustomerProfileDto
  extends BaseQueryDto
  implements QueryDto<CustomerProfile> {}
