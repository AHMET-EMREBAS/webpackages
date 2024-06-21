import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateProfileDto {
  @Property({ type: 'string', minLength: 3, maxLength: 100, required: true })
  firstName: string;

  @Property({ type: 'string', minLength: 3, maxLength: 100, required: true })
  lastName: string;

  @Property({ type: 'string', minLength: 3, maxLength: 100 })
  middleName: string;
}