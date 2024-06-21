import { PartialType } from '@nestjs/swagger';
import { CreatePhoneDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdatePhoneDto extends PartialType(CreatePhoneDto) {}
