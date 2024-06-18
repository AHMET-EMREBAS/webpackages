import { Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateMessageDto {
  @Property({ type: 'string', maxLength: 100 })
  title: string;

  @Property({ type: 'string', maxLength: 1000 })
  message: string;
}
