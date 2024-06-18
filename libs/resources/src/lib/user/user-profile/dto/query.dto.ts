import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { UserProfile } from '../entities';

@Exclude()
export class QueryUserProfileDto
  extends BaseQueryDto
  implements QueryDto<UserProfile>
{
  @QueryProperty() name!: string;
}
