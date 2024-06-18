import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { User } from '../entities';

@Exclude()
export class QueryUserDto extends BaseQueryDto implements QueryDto<User> {
  @QueryProperty() name!: string;
}
