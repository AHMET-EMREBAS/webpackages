import { MessageView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchMessageDto implements SearchDto<MessageView> {
  @SearchProperty<Message>(['message', 'readDate', ,])
  search: FindOptionsWhere<Message>;
}
