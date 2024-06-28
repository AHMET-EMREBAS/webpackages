import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';
import { AccessPolicy } from '@webpackages/types';

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
}
