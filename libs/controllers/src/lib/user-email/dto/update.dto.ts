import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateUserEmailDto {
  @Property({ type: 'string', format: 'email' }) email: string;
}
