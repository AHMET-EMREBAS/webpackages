import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateMessageDto {
  @Property({ type: 'string', maxLength: 2000 }) message: string;
  @Property({ type: 'date' }) readDate: Date;
}
