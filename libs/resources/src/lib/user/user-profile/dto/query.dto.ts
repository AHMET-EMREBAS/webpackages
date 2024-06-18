import { Exclude } from 'class-transformer';
import { QueryProfileDto } from '../../../common';
import { QueryProperty } from '@webpackages/core';

@Exclude()
export class QueryUserProfileDto extends QueryProfileDto {
  @QueryProperty() user: string;
}
