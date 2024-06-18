import { PartialType } from '@nestjs/swagger';
import { CreateUserImageDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateUserImageDto extends PartialType(CreateUserImageDto) {}
