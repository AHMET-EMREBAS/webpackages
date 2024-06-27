import { Metadata } from '@webpackages/types';

export const TaskMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    name: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      required: true,
      unique: true,
      description: 'Unique task name',
      example: 'Replace the CPU',
      tabIndex: 1,
      class: 'order-1 w-full',
      inputType: 'text',
    },

    description: {
      type: 'string',
      maxLength: 1000,
      example: 'CPU overheating, replace it with the one in the shelf 32-12',
      class: 'order-2 w-full',
      inputType: 'textarea',
      tabIndex: 2,
    },
    tags: {
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

      map(value) {
        return value.tags?.join(', ') || '';
      },
    },

    difficulty: {
      type: 'string',
      enum: ['easy', 'medium', 'hard'],
      description: 'The difficulty of the task',
      example: 'medium',
      inputType: 'select',
      class: 'order-3 w-3/12 grow',
      tabIndex: 8,
    },

    status: {
      type: 'string',
      enum: ['new', 'done', 'in-progress', 'delayed'],
      description: 'What is the status of the task?',
      example: 'new',
      class: 'order-4 w-4/12 grow',
      inputType: 'select',
      tabIndex: 4,
      tableColumnConditionalClass(value: any) {
        return value.status === 'done' ? 'bg-green-400' : 'bg-orange-400';
      },
    },

    startDate: {
      type: 'date',
      description: 'Set this date, when the tech starts the task',
      example: new Date().toLocaleDateString(),
      class: 'order-5 w-3/12 grow',
      tabIndex: 5,
      map(value) {
        return new Date(value.startDate).toDateString();
      },
    },

    endDate: {
      type: 'date',
      description: 'Set this date when the task is complete',
      example: new Date('6-28-2024').toLocaleDateString(),
      class: 'order-6 w-3/12 grow',
      tabIndex: 6,
      map(value) {
        return new Date(value.startDate).toDateString();
      },
    },

    dueDate: {
      type: 'date',
      required: true,
      description: 'What is the expected due for the task.',
      example: new Date('10-12-2024').toLocaleDateString(),
      class: 'order-7 w-3/12 grow',
      tabIndex: 7,
      map(value) {
        return new Date(value.startDate).toDateString();
      },
    },
  },
  relations: {
    users: {
      relationType: 'one',
      targetName: 'User',
      label: 'Asignees',
      viewColumns: ['username'],
      resourceLabelProperty: 'username',
      class: 'order-8 w-full grow',
      tabIndex: 8,
    },
  },
};
