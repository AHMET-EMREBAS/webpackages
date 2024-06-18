import { PartialType } from '@nestjs/swagger';
import { CreateProfileDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateProfileDto extends PartialType(CreateProfileDto) {}
