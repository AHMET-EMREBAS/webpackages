import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateSerialNumberDto {
  @Property({ type: 'string', minimum: 5 })
  serialNumber: string;

  @Property({ type: 'boolean', required: true })
  inStock: boolean;

  @Property({ type: 'boolean' })
  generated: boolean;
}
