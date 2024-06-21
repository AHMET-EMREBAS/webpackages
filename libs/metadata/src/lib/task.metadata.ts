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
    },

    tags: { type: 'string' },
    dueDate: { type: 'date', required: true },
    startDate: { type: 'date' },
    endDate: { type: 'date' },
    description: { type: 'string', maxLength: 1000 },
    status: { enum: ['new', 'done', 'in-progress', 'delayed'] },
    difficulty: { enum: ['easy', 'medium', 'hard'] },
  },
  relations: {
    users: { relationType: 'many', targetName: 'User' },
  },
};
