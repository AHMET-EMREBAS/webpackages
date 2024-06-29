import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateSerialNumberDto {
  @Property({
    type: 'string',
    label: 'Serial Number Prefix',
    inputType: 'text',
    class: 'order-6, w-4/12 grow',
    tabIndex: 5,
  })
  prefix: string;
  @Property({
    type: 'string',
    label: 'Serial Number Suffix',
    inputType: 'text',
    class: 'order-6, w-4/12 grow',
    tabIndex: 6,
  })
  suffix: string;
}
