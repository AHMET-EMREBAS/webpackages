import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateUserImgDto {
  @Property({ type: 'string', minLength: 3, maxLength: 100 }) title: string;
  @Property({ type: 'string', update: false }) generatedName: string;

  @Property({ type: 'object', target: IDDto, required: true })
  user: IDDto;
}
