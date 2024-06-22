import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateSkuDetailDto {
  @Property({ type: 'string', maxLength: 100, example: 'white' }) color: string;
  @Property({ type: 'string', maxLength: 100, example: '60in' }) height: string;
  @Property({ type: 'string', maxLength: 100, example: '20in' }) width: string;
  @Property({ type: 'string', maxLength: 100, example: '40lb' }) weight: string;
  @Property({ type: 'string', format: 'url', example: 'https://youtube.com' })
  manual: string;
  @Property({ type: 'string', maxLength: 100, example: 'apple' }) make: string;
  @Property({ type: 'string', maxLength: 100, example: '2024' }) model: string;
  @Property({
    type: 'string',
    maxLength: 1000,
    example: 'Add some notes about the product',
  })
  notes: string;
  @Property({ type: 'string', format: 'url', example: 'https://youtube.com' })
  website: string;
  @Property({
    type: 'string',
    maxLength: 100,
    example: 'GH Hub Fast Production',
  })
  manufacturer: string;
  @Property({
    type: 'string',
    maxLength: 100,
    example: 'The product highlights, hot features',
  })
  highlight: string;

  @Property({ type: 'number', required: true })
  sku: IDDto;
}
