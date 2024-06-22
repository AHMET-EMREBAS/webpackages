import { BaseEntity } from '@webpackages/types';
import { IProject } from './project';

export interface ISprint extends BaseEntity {
  name: string;

  description: string;

  project: IProject;
}
