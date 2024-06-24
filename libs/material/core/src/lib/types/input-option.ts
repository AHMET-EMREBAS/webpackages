import { EntitySelectOption, PropertyOptions } from '@webpackages/types';

export type InputOption = Partial<
  Pick<
    PropertyOptions,
    | 'name'
    | 'inputType'
    | 'icon'
    | 'inputType'
    | 'required'
    | 'minLength'
    | 'maxLength'
    | 'minimum'
    | 'maximum'
  >
> & {
  label: string;
  resourceName: string;
  autocompleteOptions: EntitySelectOption[];
  class: string;
  tabIndex: number;
};
