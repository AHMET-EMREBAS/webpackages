import { PartialType } from '@nestjs/swagger';
import { CreateUserProfileDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateUserProfileDto extends PartialType(CreateUserProfileDto) {}
