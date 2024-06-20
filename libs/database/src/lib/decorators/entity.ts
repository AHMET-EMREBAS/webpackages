import { applyDecorators } from '@nestjs/common';
import { Exclude } from 'class-transformer';
import { Entity as TypeormEntity } from 'typeorm';

export function Entity() {
  return applyDecorators(Exclude(), TypeormEntity());
}
