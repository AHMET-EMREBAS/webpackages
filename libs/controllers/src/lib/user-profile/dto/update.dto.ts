import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateUserProfileDto {
  @Property({ type: 'string', minLength: 3, maxLength: 100, example: 'Ahmet' })
  firstName: string;
  @Property({
    type: 'string',
    minLength: 3,
    maxLength: 100,
    example: 'Emrebas',
  })
  lastName: string;
  @Property({ type: 'string', minLength: 3, maxLength: 100, example: 'N/A' })
  middleName: string;
}
