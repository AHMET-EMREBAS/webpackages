import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { IProfile } from '@webpackages/models';

@Entity()
export class Profile extends BaseEntity implements IProfile {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
