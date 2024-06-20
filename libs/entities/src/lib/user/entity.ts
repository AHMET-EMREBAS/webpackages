import { BaseEntity, Column, Entity } from '@webpackages/database';

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'string', required: true }) username: string;
  @Column({ type: 'string', required: true }) password: string;
}
