import { QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { QueryEmailDto } from '../../../common';

@Exclude()
export class QueryCustomerEmailDto extends QueryEmailDto {
  @QueryProperty() user: string;
}
