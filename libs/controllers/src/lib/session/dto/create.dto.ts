import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateSessionDto {
  @Property({ type: 'number', required: true })
  user: IDDto;
}
