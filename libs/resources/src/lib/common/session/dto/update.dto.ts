import { PartialType } from '@nestjs/swagger';
import { CreateSessionDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateSessionDto extends PartialType(CreateSessionDto) {}
