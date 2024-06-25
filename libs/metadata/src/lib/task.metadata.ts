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
    },

    description: {
      type: 'string',
      maxLength: 1000,
      example: 'CPU overheating, replace it with the one in the shelf 32-12',
    },
    tags: {
      type: 'string',
      isArray: true,
      description:
        'Task category that indicate the expertise. For example PC Hardware',
      example: ['PC Hardware', 'CPU', 'Hardware'],
    },
    dueDate: {
      type: 'date',
      required: true,
      description: 'What is the expected due for the task.',
      example: new Date('10-12-2024').toLocaleDateString(),
    },
    startDate: {
      type: 'date',
      description: 'Set this date, when the tech starts the task',
      example: new Date().toLocaleDateString(),
    },
    endDate: {
      type: 'date',
      description: 'Set this date when the task is complete',
      example: new Date('6-28-2024').toLocaleDateString(),
    },
    status: {
      type: 'string',
      enum: ['new', 'done', 'in-progress', 'delayed'],
      description: 'What is the status of the task?',
      example: 'new',
    },
    difficulty: {
      type: 'string',
      enum: ['easy', 'medium', 'hard'],
      description: 'The difficulty of the task',
      example: 'medium',
    },
  },
  relations: {
    users: {
      relationType: 'one',
      targetName: 'User',
      viewColumns: ['username'],
      resourceLabelProperty: 'username',
    },
  },
};
