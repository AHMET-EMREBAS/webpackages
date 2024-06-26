import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateSessionDto {
  @Property({
    type: 'string',
    example: 'Inventory',
    description: 'Access scope',
  })
  scope: string;
  @Property({
    type: 'string',
    unique: true,
    example: '1279184212',
    description: 'Unique device id to manage use access and profile (internal)',
  })
  deviceId: string;
  @Property({
    type: 'string',
    unique: true,
    example: '29839ualiksduriqwuyer;oasf',
    description: 'JWT Token',
  })
  token: string;
}
