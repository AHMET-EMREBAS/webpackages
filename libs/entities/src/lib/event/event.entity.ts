import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { IEvent } from '@webpackages/models';

@Entity()
export class Event extends BaseEntity implements IEvent {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
