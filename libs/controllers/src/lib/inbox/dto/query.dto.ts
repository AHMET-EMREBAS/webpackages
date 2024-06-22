import { InboxView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryInboxDto extends BaseQueryDto implements QueryDto<InboxView> {
  @QueryProperty() userId: string;
  @QueryProperty() userActive: string;
  @QueryProperty() sentId: string;
  @QueryProperty() sentActive: string;
  @QueryProperty() receivedId: string;
  @QueryProperty() receivedActive: string;
}
