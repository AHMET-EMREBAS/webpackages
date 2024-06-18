import { PartialType } from '@nestjs/swagger';
import { CreateStoreDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateStoreDto extends PartialType(CreateStoreDto) {}
