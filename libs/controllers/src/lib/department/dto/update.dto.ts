import { PartialType } from '@nestjs/swagger';
import { CreateDepartmentDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {}
