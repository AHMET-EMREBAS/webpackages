import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IUserEmail } from '@webpackages/models';

@Entity()
export class UserEmail extends BaseEntity implements IUserEmail {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
