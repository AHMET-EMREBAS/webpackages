import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { UserImg } from '../entities';

@Exclude()
export class QueryUserImgDto extends BaseQueryDto implements QueryDto<UserImg> {
  @QueryProperty() name!: string;
}
