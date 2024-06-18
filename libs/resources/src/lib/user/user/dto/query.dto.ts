import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { User } from '../entities';

@Exclude()
export class QueryUserDto extends BaseQueryDto implements QueryDto<User> {
  @Exclude() password: string;
  @Exclude() permissions: string;
  @QueryProperty() username!: string;
}
