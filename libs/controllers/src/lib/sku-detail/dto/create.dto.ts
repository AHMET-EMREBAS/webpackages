import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateSkuDetailDto {
  @Property({ type: 'string', maxLength: 100 })
  color: string;

  @Property({ type: 'string', maxLength: 100 })
  height: string;

  @Property({ type: 'string', maxLength: 100 })
  width: string;

  @Property({ type: 'string', maxLength: 100 })
  weight: string;

  @Property({ type: 'string', format: 'url' })
  manual: string;
}
