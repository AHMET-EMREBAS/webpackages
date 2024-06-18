import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Email } from '../entities';

@Exclude()
export class QueryEmailDto extends BaseQueryDto implements QueryDto<Email> {
  @QueryProperty() email!: string;
}
