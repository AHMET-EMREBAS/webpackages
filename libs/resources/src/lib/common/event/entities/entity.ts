import { Entity, Column, BaseEntity } from '@webpackages/database';

@Entity()
export class Event extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
