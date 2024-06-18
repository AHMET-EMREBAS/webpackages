import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Message } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchMessageDto implements SearchDto<Message> {
  @SearchProperty<Message>(['name'])
  search: FindOptionsWhere<Message>;
}
