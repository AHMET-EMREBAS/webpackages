import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateNotificationDto {
  @Property({ type: 'string', maxLength: 1000 }) message: string;
}
