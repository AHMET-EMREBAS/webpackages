import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IUserProfile } from '@webpackages/models';

@Entity()
export class UserProfile extends BaseEntity implements IUserProfile {
  @Column({ type: 'string', required: true }) firstName: string;
  @Column({ type: 'string', required: true }) lastName: string;
  @Column({ type: 'string' }) middleName: string;
}
