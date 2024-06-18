import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Phone } from '../entities';

@Exclude()
export class QueryPhoneDto extends BaseQueryDto implements QueryDto<Phone> {
  @QueryProperty() phone!: string;
}
