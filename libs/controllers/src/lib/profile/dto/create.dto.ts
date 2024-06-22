import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateProfileDto {
  @Property({
    type: 'string',
    minLength: 3,
    maxLength: 100,
    required: true,
    example: 'Ahmet',
  })
  firstName: string;
  @Property({
    type: 'string',
    minLength: 3,
    maxLength: 100,
    required: true,
    example: 'Emrebas',
  })
  lastName: string;
  @Property({ type: 'string', minLength: 3, maxLength: 100, example: 'N/A' })
  middleName: string;
}
