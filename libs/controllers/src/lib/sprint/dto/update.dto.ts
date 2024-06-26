import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateSprintDto {
  @Property({
    type: 'string',
    minLength: 3,
    maxLength: 100,
    unique: true,
    description: 'Sprint name',
    example: 'Project Analisys',
  })
  name: string;
  @Property({
    type: 'string',
    maxLength: 1000,
    description: 'Sprint description',
    example:
      'Focus on high level project specs and review similar projects to establish a reliable insight',
  })
  description: string;
}
