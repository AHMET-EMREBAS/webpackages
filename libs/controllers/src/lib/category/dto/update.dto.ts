import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateCategoryDto {
  @Property({
    type: 'string',
    label: 'Category Name',
    minLength: 3,
    maxLength: 100,
    unique: true,
    example: 'Default Category',
    class: 'w-full',
  })
  name: string;
}
