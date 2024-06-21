import { Message } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchMessageDto implements SearchDto<Message> {
  @SearchProperty<Message>([])
  search: FindOptionsWhere<Message>;
}
