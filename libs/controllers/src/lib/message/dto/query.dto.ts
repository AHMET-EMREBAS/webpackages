import { Message } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryMessageDto extends BaseQueryDto implements QueryDto<Message> {
  @QueryProperty() message: string;
  @QueryProperty() readDate: string;
  @QueryProperty() user: string;
  @QueryProperty() to: string;
}
