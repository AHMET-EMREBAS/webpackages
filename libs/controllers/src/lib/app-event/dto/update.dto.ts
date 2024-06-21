import { PartialType } from '@nestjs/swagger';
import { CreateAppEventDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateAppEventDto extends PartialType(CreateAppEventDto) {}
