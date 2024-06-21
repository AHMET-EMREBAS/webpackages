import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateTaskDto {
  @Property({
    type: 'string',
    minLength: 3,
    maxLength: 100,
    required: true,
    unique: true,
  })
  name: string;

  @Property({ type: 'string' })
  tags: string;

  @Property({ type: 'date', required: true })
  dueDate: Date;

  @Property({ type: 'date' })
  startDate: Date;

  @Property({ type: 'date' })
  endDate: Date;

  @Property({ type: 'string', maxLength: 1000 })
  description: string;

  @Property({ type: 'string', enum: ['new', 'done', 'in-progress', 'delayed'] })
  status: string;

  @Property({ type: 'string', enum: ['easy', 'medium', 'hard'] })
  difficulty: string;

  @Property({ type: 'object', target: IDDto, isArray: true })
  users: IDDto[];
}
