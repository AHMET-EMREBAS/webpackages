import { Exclude } from 'class-transformer';
import { QueryEmailDto } from '../../../common';
import { QueryProperty } from '@webpackages/core';

@Exclude()
export class QueryUserEmailDto extends QueryEmailDto {
  @QueryProperty() user: string;
}
