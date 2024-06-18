import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Profile } from '../entities';

@Exclude()
export class QueryProfileDto extends BaseQueryDto implements QueryDto<Profile> {
  @QueryProperty() firstName: string;
  @QueryProperty() middleName: string;
  @QueryProperty() lastName: string;
  @QueryProperty() occupation: string;
  @QueryProperty() profileImg: string;
}
