import { InboxView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderInboxDto extends CreateOrderDto<InboxView>([]) {}
