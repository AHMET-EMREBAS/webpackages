import { Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateImgDto {
  @Property({ type: 'string', maxLength: 100 })
  name: string;

  @Property({ type: 'string', required: true, format: 'url' })
  url: string;
}
