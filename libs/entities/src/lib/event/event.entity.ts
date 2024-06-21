import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IEvent } from '@webpackages/models';
import { EventPayload } from '@webpackages/types';

@Entity()
export class Event extends BaseEntity implements IEvent {
  @Column({ type: 'string', required: true, unique: true })
  name: string;

  @Column({ type: 'object', required: false, unique: false })
  payload: object;
}
