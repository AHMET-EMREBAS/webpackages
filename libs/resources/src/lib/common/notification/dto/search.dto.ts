import { Exclude } from 'class-transformer';
import { SearchMessageDto } from '../../message';

@Exclude()
export class SearchNotificationDto extends SearchMessageDto {}
