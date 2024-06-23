import { PartialType } from '@nestjs/swagger';
import { CreateOrganizationDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateOrganizationDto extends PartialType(CreateOrganizationDto) {}
