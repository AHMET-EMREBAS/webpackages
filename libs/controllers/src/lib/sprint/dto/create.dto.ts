import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateSprintDto {
  @Property({
    type: 'string',
    minLength: 3,
    maxLength: 100,
    required: true,
    unique: true,
    description: 'Sprint name',
    example: 'Project Analisys',
    class: 'order-2 w-full ',
    tabIndex: 2,
  })
  name: string;
  @Property({
    type: 'string',
    maxLength: 1000,
    description: 'Sprint description',
    example:
      'Focus on high level project specs and review similar projects to establish a reliable insight',
    class: 'order-3 w-full ',
    tabIndex: 3,
  })
  description: string;

  @Property({ type: 'object', target: IDDto, required: true })
  project: IDDto;
}
