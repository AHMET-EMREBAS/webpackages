import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IProfile } from '@webpackages/models';

@Entity()
export class Profile extends BaseEntity implements IProfile {
  @Column({ type: 'string', required: true }) firstName: string;
  @Column({ type: 'string', required: true }) lastName: string;
  @Column({ type: 'string' }) middleName: string;
}
