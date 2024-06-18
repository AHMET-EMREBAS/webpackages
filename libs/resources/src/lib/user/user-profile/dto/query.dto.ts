import { Exclude } from 'class-transformer';
import { QueryProperty } from '@webpackages/core';
import { QueryProfileDto } from '../../../common';

@Exclude()
export class QueryUserProfileDto extends QueryProfileDto {
  @Exclude() user: string;
}
