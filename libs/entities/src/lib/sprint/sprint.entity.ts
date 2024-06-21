import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ISprint } from '@webpackages/models';

import { Project } from '../project';

@Entity()
export class Sprint extends BaseEntity implements ISprint {
  @Column({ type: 'string', required: true, unique: true })
  name: string;

  @Relation({ relationType: 'owner', target: Project })
  project: Project;
}
