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
    description: 'Unique task name',
    example: 'Replace the CPU',
  })
  name: string;
  @Property({
    type: 'string',
    maxLength: 1000,
    example: 'CPU overheating, replace it with the one in the shelf 32-12',
  })
  description: string;
  @Property({
    type: 'string',
    isArray: true,
    description:
      'Task category that indicate the expertise. For example PC Hardware',
    example: ['PC Hardware', 'CPU', 'Hardware'],
  })
  tags: string[];
  @Property({
    type: 'date',
    required: true,
    description: 'What is the expected due for the task.',
    example: '10/12/2024',
  })
  dueDate: Date;
  @Property({
    type: 'date',
    description: 'Set this date, when the tech starts the task',
    example: '6/23/2024',
  })
  startDate: Date;
  @Property({
    type: 'date',
    description: 'Set this date when the task is complete',
    example: '6/28/2024',
  })
  endDate: Date;
  @Property({
    type: 'string',
    enum: ['new', 'done', 'in-progress', 'delayed'],
    description: 'What is the status of the task?',
    example: 'new',
  })
  status: string;
  @Property({
    type: 'string',
    enum: ['easy', 'medium', 'hard'],
    description: 'The difficulty of the task',
    example: 'medium',
  })
  difficulty: string;

  @Property({ type: 'number' })
  users: IDDto;
}
