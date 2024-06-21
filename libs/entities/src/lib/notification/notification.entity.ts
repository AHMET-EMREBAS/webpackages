import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { INotification } from '@webpackages/models';

@Entity()
export class Notification extends BaseEntity implements INotification {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
