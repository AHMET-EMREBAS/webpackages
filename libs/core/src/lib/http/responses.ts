import { Exclude } from 'class-transformer';
import { Property } from '../property';

export class ValidationConstraintsDto {
  @Property({ type: 'string' }) minLength?: string;
  @Property({ type: 'string' }) maxLength?: string;
  @Property({ type: 'string' }) min?: string;
  @Property({ type: 'string' }) max?: string;
  @Property({ type: 'string' }) isEmail?: string;
  @Property({ type: 'string' }) isStrongPassword?: string;
}

export class ValidationErrorDto {
  @Property({ type: 'object', target: class Target {} })
  target?: Record<string, string>;

  @Property({ type: 'string' })
  property!: string;

  @Property({ type: 'string' })
  value?: any;

  @Property({ type: 'object', target: ValidationConstraintsDto })
  constraints?: ValidationConstraintsDto;

  @Property({ type: 'object', target: ValidationErrorDto, isArray: true })
  children?: ValidationErrorDto[] | undefined;
}

export class UnprocessableENTResponseDto {
  @Property({ type: 'object', target: ValidationErrorDto, isArray: true })
  errors?: ValidationErrorDto[];
}
