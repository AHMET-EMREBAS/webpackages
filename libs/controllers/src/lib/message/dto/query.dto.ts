import { MessageView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryMessageDto
  extends BaseQueryDto
  implements QueryDto<MessageView>
{
  @QueryProperty() message: string;
  @QueryProperty() readDate: string;
  @QueryProperty() fromUserId: string;
  @QueryProperty() fromUserActive: string;
  @QueryProperty() toUserId: string;
  @QueryProperty() toUserActive: string;
}
