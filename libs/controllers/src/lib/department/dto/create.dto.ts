import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateDepartmentDto {
  @Property({
    type: 'string',
    label: 'Category Name',
    minLength: 3,
    maxLength: 100,
    required: true,
    unique: true,
    example: 'Default Category',
    class: 'w-full',
  })
  name: string;
}
