import { ITask } from '@webpackages/models';

export function getBuiltinTasks(): Partial<ITask>[] {
  return [
    {
      name: 'First Good Task',
      description: 'Task description',
      dueDate: new Date(),
      status: 'done',
      difficulty: 'easy',
      tags: ['documentation'],
    },
    {
      name: 'Second Good Task',
      description: 'Task description',
      dueDate: new Date(),
      status: 'done',
      difficulty: 'easy',
      tags: ['documentation'],
    },
  ];
}
