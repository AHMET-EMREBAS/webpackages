import { PartialType } from '@nestjs/swagger';
import { CreateAddressDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateAddressDto extends PartialType(CreateAddressDto) {}
