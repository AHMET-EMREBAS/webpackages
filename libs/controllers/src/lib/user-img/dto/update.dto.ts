import { PartialType } from '@nestjs/swagger';
import { CreateUserImgDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateUserImgDto extends PartialType(CreateUserImgDto) {}
