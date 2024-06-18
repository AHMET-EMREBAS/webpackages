import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { UserEmail } from '../entities';

@Exclude()
export class QueryUserEmailDto
  extends BaseQueryDto
  implements QueryDto<UserEmail>
{
  @QueryProperty() name!: string;
}
