import { Email } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryEmailDto extends BaseQueryDto implements QueryDto<Email> {
  @QueryProperty() email: string;
}
