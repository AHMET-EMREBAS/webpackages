import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateMessageDto {
  @Property({ type: 'string', maxLength: 2000 })
  message: string;

  @Property({ type: 'date' })
  readDate: Date;

  @Property({ type: 'number', required: true })
  undefined: IDDto;

  @Property({ type: 'object', target: IDDto, isArray: true })
  undefined: IDDto[];
}
