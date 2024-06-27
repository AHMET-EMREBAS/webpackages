import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateStoreDto {
  @Property({
    type: 'string',
    minLength: 3,
    maxLength: 100,
    unique: true,
    description: 'Store name might contain a partial address information',
    example: 'Chicago B-Street 60645',
  })
  name: string;

  @Property({ type: 'number' })
  manager: IDDto;
}
