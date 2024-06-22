import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateStoreDto {
  @Property({
    type: 'string',
    minLength: 3,
    maxLength: 100,
    required: true,
    unique: true,
    description: 'Store name might contain a partial address information',
    example: 'Chicago B-Street 60645',
  })
  name: string;

  @Property({ type: 'number' })
  manager: IDDto;
}
