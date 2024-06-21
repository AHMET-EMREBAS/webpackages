import { PartialType } from '@nestjs/swagger';
import { CreateSkuDetailDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateSkuDetailDto extends PartialType(CreateSkuDetailDto) {}
