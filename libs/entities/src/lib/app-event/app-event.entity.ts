import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IAppEvent } from '@webpackages/models';
import { EventPayload } from '@webpackages/types';

@Entity()
export class AppEvent extends BaseEntity implements IAppEvent {
  @Column({ type: 'string', required: true, unique: true }) name: string;
  @Column({ type: 'object' }) payload: EventPayload;
}
