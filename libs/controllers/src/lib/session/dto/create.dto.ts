import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateSessionDto {
  @Property({
    type: 'string',
    example: 'Inventory',
    description: 'Access scope',
  })
  scope: string;
  @Property({
    type: 'string',
    required: true,
    unique: true,
    example: '1279184212',
    description: 'Unique device id to manage use access and profile (internal)',
  })
  deviceId: string;
  @Property({
    type: 'string',
    required: true,
    unique: true,
    example: '29839ualiksduriqwuyer;oasf',
    description: 'JWT Token',
  })
  token: string;

  @Property({ type: 'number', required: true })
  user: IDDto;
}
