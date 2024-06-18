import { PartialType } from '@nestjs/swagger';
import { CreateManufacturerDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateManufacturerDto extends PartialType(CreateManufacturerDto) {}
