import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateAccessTokenDto {
  @Property({
    type: 'string',
    required: true,
    minLength: 3,
    maxLength: 100,
    inputType: 'text',
    example: 'Token name',
  })
  name: string;
  @Property({
    type: 'string',
    required: true,
    minLength: 10,
    maxLength: 100,
    inputType: 'text',
    example: 'wiqouer923784123uis918374jw892y43',
  })
  token: string;

  @Property({ type: 'number', required: true })
  user: IDDto;
}
