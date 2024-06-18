import { Exclude } from 'class-transformer';
import { CreateMessageDto } from '../../message';

@Exclude()
export class CreateNotificationDto extends CreateMessageDto {}
