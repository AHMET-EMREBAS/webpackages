import { Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateTaskDto {
  @Property({ type: 'string', required: true }) name: string;
  @Property({ type: 'string' }) description: string;
  @Property({ type: 'date' }) dueDate: string;
}
