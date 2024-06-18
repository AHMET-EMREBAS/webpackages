import { PartialType } from '@nestjs/swagger';
import { CreateAccessTokenDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateAccessTokenDto extends PartialType(CreateAccessTokenDto) {}
