import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateAppEventDto {
  @Property({
    type: 'string',
    minLength: 3,
    maxLength: 100,
    required: true,
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
