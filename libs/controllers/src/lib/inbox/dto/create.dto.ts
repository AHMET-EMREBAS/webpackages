import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateInboxDto {
  @Property({ type: 'number', required: true })
  user: IDDto;

  @Property({ type: 'object', target: IDDto, isArray: true })
  sent: IDDto[];

  @Property({ type: 'object', target: IDDto, isArray: true })
  received: IDDto[];
}
