import { PartialType } from '@nestjs/swagger';
import { CreateMessageDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateMessageDto extends PartialType(CreateMessageDto) {}
