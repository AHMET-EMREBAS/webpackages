import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateAppEventDto {
  @Property({
    type: 'string',
    minLength: 3,
    maxLength: 100,
    unique: true,
    example: 'Event Name',
  })
  name: string;
  @Property({
    type: 'object',
    targetName: 'EventPayload',
    example: { value: 'Event Value' },
  })
  payload: EventPayload;
}
