import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateNotificationDto {
  @Property({ type: 'string', maxLength: 1000 }) message: string;
}
