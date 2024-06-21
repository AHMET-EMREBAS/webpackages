import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IProject } from '@webpackages/models';

@Entity()
export class Project extends BaseEntity implements IProject {
  @Column({ type: 'string', required: true, unique: true }) name: string;
}
