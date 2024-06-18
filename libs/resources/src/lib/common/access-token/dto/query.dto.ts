import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { AccessToken } from '../entities';

@Exclude()
export class QueryAccessTokenDto
  extends BaseQueryDto
  implements QueryDto<AccessToken>
{
  @QueryProperty() name!: string;
}
