import { Property } from '@webpackages/property';

export class ValidationConstraintsDto {
  @Property({ type: 'string' }) minLength?: string;
  @Property({ type: 'string' }) maxLength?: string;
  @Property({ type: 'string' }) min?: string;
  @Property({ type: 'string' }) max?: string;
  @Property({ type: 'string' }) isEmail?: string;
  @Property({ type: 'string' }) isStrongPassword?: string;
}

export class ValidationErrorDto {
  @Property({
    type: 'object',
    target: class Target {},
    example: {
      name: 'example name',
      description: 'example description',
    },
  })
  target?: Record<string, string>;

  @Property({ type: 'string', example: 'name' })
  property!: string;

  @Property({ type: 'string', example: 'example name' })
  value?: any;

  @Property({
    type: 'object',
    target: ValidationConstraintsDto,
    example: {
      minLength: 'name should be longer than 3 characters',
      maxLength: 'name should be shorter than 30 characters',
      isEmail: 'name should be a valid email',
      isNotEmpty: 'name should not be empty',
    },
  })
  constraints?: ValidationConstraintsDto;

  @Property({
    type: 'object',
    target: ValidationErrorDto,
    isArray: true,
    example: [
      {
        target: { name: 'example name', description: 'example description' },
        property: 'name',
        value: 'example name',
        constraints: {
          minLength: 'name should be longer than 3 characters',
          maxLength: 'name should be shorter than 30 characters',
          isEmail: 'name should be a valid email',
          isNotEmpty: 'name should not be empty',
        },
      },
    ],
  })
  children?: ValidationErrorDto[] | undefined;
}

export class MessageResponse {
  @Property({ type: 'string', example: 'Error message' })
  message!: string;
}
