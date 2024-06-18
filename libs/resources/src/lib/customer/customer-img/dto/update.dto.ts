import { PartialType } from '@nestjs/swagger';
import { CreateCustomerImgDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateCustomerImgDto extends PartialType(CreateCustomerImgDto) {}
