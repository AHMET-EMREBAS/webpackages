import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { IInbox } from '@webpackages/models';

@Entity()
export class Inbox extends BaseEntity implements IInbox {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
