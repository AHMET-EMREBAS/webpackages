import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IUserProfile } from '@webpackages/models';

@Entity()
export class UserProfile extends BaseEntity implements IUserProfile {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
