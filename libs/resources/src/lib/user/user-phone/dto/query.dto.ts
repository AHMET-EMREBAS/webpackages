import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { UserPhone } from '../entities';

@Exclude()
export class QueryUserPhoneDto
  extends BaseQueryDto
  implements QueryDto<UserPhone>
{
  @QueryProperty() name!: string;
}
