import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class IDDto {
  @Property({ type: 'number', required: true, example: 1 })
  id!: number;
}

export function ObjectIdProperty(options?: { isArray: boolean }) {
  return Property({
    type: 'object',
    target: IDDto,
    example: { id: 1 },
    isArray: options?.isArray,
  });
}
