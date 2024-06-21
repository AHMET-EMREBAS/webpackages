import { AccessPolicy, OmitBase } from '@webpackages/types';
import { Dto, Validate } from '@webpackages/class-validator';
import { User } from './user';

@Dto()
export class CreateUserDto implements OmitBase<User> {
  @Validate({ type: 'string' }) username: string;
  @Validate({ type: 'string' }) password: string;
  @Validate({ type: 'string' }) permissions: AccessPolicy;
}
