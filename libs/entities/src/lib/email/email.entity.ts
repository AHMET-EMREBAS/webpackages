import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IEmail } from '@webpackages/models';

@Entity()
export class Email extends BaseEntity implements IEmail {
  @Column({ type: 'string', required: true, unique: false }) email: string;
}
