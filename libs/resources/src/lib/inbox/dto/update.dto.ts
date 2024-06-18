import { PartialType } from '@nestjs/swagger';
import { CreateInboxDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateInboxDto extends PartialType(CreateInboxDto) {}
