import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateTaskDto {
  @Property({
    type: 'string',
    minLength: 3,
    maxLength: 100,
    unique: true,
    description: 'Unique task name',
    example: 'Replace the CPU',
    tabIndex: 1,
    class: 'order-1 w-full',
    inputType: 'text',
  })
  name: string;
  @Property({
    type: 'string',
    maxLength: 1000,
    example: 'CPU overheating, replace it with the one in the shelf 32-12',
    class: 'order-2 w-full',
    inputType: 'textarea',
    tabIndex: 2,
  })
  description: string;
  @Property({
    type: 'string',
    isArray: true,
    description:
      'Task category that indicate the expertise. For example PC Hardware',
    example: ['PC Hardware', 'CPU', 'Hardware'],
    inputType: 'select',
    enum: [
      'fixing',
      'replacement',
      'cleaning',
      'documentation',
      'testing',
      'inspection',
      'other',
    ],
    multiple: true,
    class: 'order-3 w-3/12 grow',
    tabIndex: 3,
  })
  tags: string[];
  @Property({
    type: 'string',
    enum: ['easy', 'medium', 'hard'],
    description: 'The difficulty of the task',
    example: 'medium',
    inputType: 'select',
    class: 'order-3 w-3/12 grow',
    tabIndex: 8,
  })
  difficulty: string;
  @Property({
    type: 'string',
    enum: ['new', 'done', 'in-progress', 'delayed'],
    description: 'What is the status of the task?',
    example: 'new',
    class: 'order-4 w-3/12 grow',
    inputType: 'select',
    tabIndex: 4,
  })
  status: string;
  @Property({
    type: 'date',
    description: 'Set this date, when the tech starts the task',
    example: '6/28/2024',
    class: 'order-5 w-3/12 grow',
    tabIndex: 5,
  })
  startDate: Date;
  @Property({
    type: 'date',
    description: 'Set this date when the task is complete',
    example: '6/28/2024',
    class: 'order-6 w-3/12 grow',
    tabIndex: 6,
  })
  endDate: Date;
  @Property({
    type: 'date',
    description: 'What is the expected due for the task.',
    example: '10/12/2024',
    class: 'order-7 w-3/12 grow',
    tabIndex: 7,
  })
  dueDate: Date;

  @Property({ type: 'object', target: IDDto })
  users: IDDto;
}
