import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Profile } from '../entities';

@Exclude()
export class QueryProfileDto extends BaseQueryDto implements QueryDto<Profile> {
  @QueryProperty() name: string;
}
