import { PartialType } from '@nestjs/swagger';
import { CreateNotificationDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateNotificationDto extends PartialType(CreateNotificationDto) {}
