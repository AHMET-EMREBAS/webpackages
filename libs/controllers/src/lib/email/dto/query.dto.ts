import { EmailView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryEmailDto extends BaseQueryDto implements QueryDto<EmailView> {
  @QueryProperty() email: string;
}
