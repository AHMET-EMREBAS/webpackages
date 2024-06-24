import { Arr } from './arr';

export type InputType =
  | 'autocomplete-many'
  | 'autocomplete'
  | 'button-toggle'
  | 'checkbox'
  | 'chip-list'
  | 'date-time'
  | 'date'
  | 'list'
  | 'number'
  | 'radio'
  | 'search-many'
  | 'search'
  | 'select'
  | 'slider-toggle'
  | 'slider'
  | 'text'
  | 'textarea'
  | 'time';

  
export const InputTypes: Arr<InputType> = [
  'autocomplete-many',
  'autocomplete',
  'button-toggle',
  'checkbox',
  'chip-list',
  'date-time',
  'date',
  'list',
  'number',
  'radio',
  'search-many',
  'search',
  'select',
  'slider-toggle',
  'slider',
  'text',
  'textarea',
  'time',
];
