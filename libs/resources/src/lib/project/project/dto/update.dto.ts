import { PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateProjectDto extends PartialType(CreateProjectDto) {}
