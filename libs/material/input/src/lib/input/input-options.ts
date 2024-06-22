import { FormControl } from '@angular/forms';
import { StringFormat } from '@webpackages/types';

export type InputOptions = {
  inputControl: FormControl;
  inputName: string;
  inputLabel: string;
  inputHint: string;
  inputMinLength: number;
  inputMaxLength: number;
  inputMin: number;
  inputMax: number;
  inputFormat: StringFormat;
};
