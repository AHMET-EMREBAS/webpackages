import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateProjectDto {
  @Property({
    type: 'string',
    minLength: 3,
    maxLength: 100,
    required: true,
    unique: true,
    example: 'Mission Imposibble Is Possible With Us',
  })
  name: string;
}
