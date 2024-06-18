import { PartialType } from '@nestjs/swagger';
import { CreateUserEmailDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateUserEmailDto extends PartialType(CreateUserEmailDto) {}
