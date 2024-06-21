import { Inbox } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryInboxDto extends BaseQueryDto implements QueryDto<Inbox> {
  @QueryProperty() user: string;
  @QueryProperty() sent: string;
  @QueryProperty() received: string;
}
