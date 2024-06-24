import { PropertyOptions } from '@webpackages/types';

export type InputOption = Partial<
  Pick<
    PropertyOptions,
    | 'icon'
    | 'inputType'
    | 'required'
    | 'minLength'
    | 'maxLength'
    | 'minimum'
    | 'maximum'
  >
> &
  Pick<PropertyOptions, 'name' | 'inputType'> & {
    label: string;
  } & Partial<{
    resourceName: string;
  }>;
