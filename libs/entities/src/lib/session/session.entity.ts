import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { ISession } from '@webpackages/models';

@Entity()
export class Session extends BaseEntity implements ISession {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
