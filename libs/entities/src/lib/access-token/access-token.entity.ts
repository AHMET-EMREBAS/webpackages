import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { IAccessToken } from '@webpackages/models';

@Entity()
export class AccessToken extends BaseEntity implements IAccessToken {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
