import { PartialType } from '@nestjs/swagger';
import { CreateEmailDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateEmailDto extends PartialType(CreateEmailDto) {}
