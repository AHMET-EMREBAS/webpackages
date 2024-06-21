import { Arr } from './arr';

export type InputType =
  | 'text'
  | 'number'
  | 'textarea'
  | 'checkbox'
  | 'select'
  | 'autocomplete'
  | 'list'
  | 'chip-list'
  | 'radio'
  | 'slider'
  | 'button-toggle'
  | 'slider-toggle'
  | 'date'
  | 'time'
  | 'date-time';

export const InputTypes: Arr<InputType> = [
  'text',
  'number',
  'textarea',
  'checkbox',
  'select',
  'autocomplete',
  'list',
  'chip-list',
  'radio',
  'slider',
  'button-toggle',
  'slider-toggle',
  'date',
  'time',
  'date-time',
];
