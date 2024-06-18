import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { UserImage } from '../entities';

@Exclude()
export class QueryUserImageDto
  extends BaseQueryDto
  implements QueryDto<UserImage>
{
  @QueryProperty() name!: string;
}
