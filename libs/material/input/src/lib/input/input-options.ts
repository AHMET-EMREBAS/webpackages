import { FormControl } from '@angular/forms';
import { InputType, StringFormat } from '@webpackages/types';

export type InputOptions = {
  inputType: InputType;
  inputControl: FormControl;
  inputName: string;
  inputLabel: string;
  inputHint: string | undefined;
  inputRequired: boolean | undefined;
  inputMinLength: number | undefined;
  inputMaxLength: number | undefined;
  inputMin: number | undefined;
  inputMax: number | undefined;
  inputFormat: StringFormat;
  inputEnums: string[];
  tabIndex: number | undefined;
  // inputMultiple: boolean | undefined;
};
