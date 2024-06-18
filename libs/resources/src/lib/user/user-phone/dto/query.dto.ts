import { QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { QueryPhoneDto } from '../../../common';

@Exclude()
export class QueryUserPhoneDto extends QueryPhoneDto {
  @QueryProperty() user!: string;
}
