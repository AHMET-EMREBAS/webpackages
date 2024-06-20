import { ApiPropertyOptions } from '@nestjs/swagger';
export type CommonPropertyOptions = Partial<
  Pick<
    ApiPropertyOptions,
    | 'required'
    | 'isArray'
    | 'example'
    | 'default'
    | 'deprecated'
    | 'readOnly'
    | 'writeOnly'
  >
> & {
  type: PropertyType;
  inputType?: InputType;
  icon?: string;
  label?: string;
  noValidate?: true;
};


export function Property(options: PropertyOptions) {
  const decorators: PropertyDecorator[] = [
    Expose(),
    ApiProperty({
      example:
        options.type === 'string'
          ? 'Sample Value'
          : options.type === 'boolean'
          ? true
          : options.type === 'date'
          ? new Date().toLocaleDateString()
          : options.type === 'number'
          ? 1234
          : options.type === 'object'
          ? {}
          : undefined,
      ...options,
      type: options.type === 'date' ? 'string' : options.type,
      required: !!options.required,
      nullable: !options.required,
    }),
  ];

  if (options.noValidate == true) {
    return applyDecorators(...decorators);
  }


  return applyDecorators(...decorators);
}
