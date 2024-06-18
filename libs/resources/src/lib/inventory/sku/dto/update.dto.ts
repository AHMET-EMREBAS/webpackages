import { PartialType } from '@nestjs/swagger';
import { CreateSkuDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateSkuDto extends PartialType( CreateSkuDto) {}
