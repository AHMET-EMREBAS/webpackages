import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IDepartment } from '@webpackages/models';

@Entity()
export class Department extends BaseEntity implements IDepartment {
  @Column({ type: 'string', required: true, unique: true }) name: string;
}
