import { PartialType } from '@nestjs/swagger';
import { CreateUserAddressDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateUserAddressDto extends PartialType(CreateUserAddressDto) {}
