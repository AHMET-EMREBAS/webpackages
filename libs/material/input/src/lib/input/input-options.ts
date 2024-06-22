import { FormControl } from '@angular/forms';
import { InputType, StringFormat } from '@webpackages/types';

export type InputOptions = {
  inputType: InputType;
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
