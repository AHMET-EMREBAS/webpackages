import { Exclude } from 'class-transformer';
import { OrderMessageDto } from '../../message';

@Exclude()
export class OrderNotificationDto extends OrderMessageDto {}
