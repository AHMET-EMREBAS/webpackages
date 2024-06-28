import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateInboxDto {
  @Property({ type: 'object', target: IDDto, required: true })
  employee: IDDto;
}
