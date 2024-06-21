import { UserPhone } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryUserPhoneDto
  extends BaseQueryDto
  implements QueryDto<UserPhone> {}
