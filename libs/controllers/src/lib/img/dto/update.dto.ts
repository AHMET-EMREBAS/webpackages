import { PartialType } from '@nestjs/swagger';
import { CreateImgDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateImgDto extends PartialType(CreateImgDto) {}
