import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { IMessage } from '@webpackages/models';

@Entity()
export class Message extends BaseEntity implements IMessage {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
