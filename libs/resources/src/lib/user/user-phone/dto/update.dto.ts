import { PartialType } from '@nestjs/swagger';
import { CreateUserPhoneDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateUserPhoneDto extends PartialType(CreateUserPhoneDto) {}
