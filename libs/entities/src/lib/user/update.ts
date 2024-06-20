import { PartialType } from '@nestjs/swagger';
import { Dto } from '@webpackages/property';
import { CreateUserDto } from './create';

@Dto()
export class UpdateUserDto extends PartialType(CreateUserDto) {}
