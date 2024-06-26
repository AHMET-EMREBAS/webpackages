import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateOrganizationDto {
  @Property({
    type: 'string',
    minLength: 3,
    maxLength: 100,
    unique: true,
    description: 'Organization name  ',
    example: 'Organization Name',
  })
  name: string;

  @Property({ type: 'number' })
  managerEmployee: IDDto;
}
