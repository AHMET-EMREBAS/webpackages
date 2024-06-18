import { Exclude } from 'class-transformer';
import { QueryMessageDto } from '../../message';

@Exclude()
export class QueryNotificationDto extends QueryMessageDto {}
