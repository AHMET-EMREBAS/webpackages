import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class ForgotPasswordDto {
  @Property({ type: 'string' })
  username: string;
}
