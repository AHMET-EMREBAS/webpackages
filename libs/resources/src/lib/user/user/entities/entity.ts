import {
  Entity,
  Column,
  BaseEntity,
  PasswordColumn,
  AccessPolicyDto,
} from '@webpackages/database';

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'string' }) username: string;
  @PasswordColumn() password: string;
  @Column({
    type: 'object',
    target: AccessPolicyDto,
    example: {
      AccessToken: {},
    } as Partial<AccessPolicyDto>,
  })
  permissions: AccessPolicyDto;
}
