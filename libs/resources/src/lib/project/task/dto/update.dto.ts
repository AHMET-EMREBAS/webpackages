import { PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
