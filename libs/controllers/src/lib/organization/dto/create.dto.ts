import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateOrganizationDto {
  @Property({
    type: 'string',
    minLength: 3,
    maxLength: 100,
    required: true,
    unique: true,
    description: 'Organization name  ',
    example: 'Organization Name',
  })
  name: string;

  @Property({ type: 'object', target: IDDto })
  managerEmployee: IDDto;
}
