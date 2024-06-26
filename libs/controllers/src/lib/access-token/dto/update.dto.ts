import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateAccessTokenDto {
  @Property({
    type: 'string',
    minLength: 3,
    maxLength: 100,
    inputType: 'text',
    example: 'Token name',
  })
  name: string;
  @Property({
    type: 'string',
    minLength: 10,
    maxLength: 100,
    inputType: 'text',
    example: 'wiqouer923784123uis918374jw892y43',
  })
  token: string;
}
