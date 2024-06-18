import { PartialType } from '@nestjs/swagger';
import { CreateCartDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateCartDto extends PartialType(CreateCartDto) {}
