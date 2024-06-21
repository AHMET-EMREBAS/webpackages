import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { INotification } from '@webpackages/models';

@Entity()
export class Notification extends BaseEntity implements INotification {
  @Column({ type: 'string', required: false, unique: false })
  message: string;
}
