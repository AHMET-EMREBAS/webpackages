import { Injectable, Provider } from '@angular/core';
import { AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

@Injectable()
export class DefaultErrorStateMatcher extends ErrorStateMatcher {
  override isErrorState(
    control: AbstractControl<any, any>,
    form: FormGroupDirective | NgForm
  ): boolean {
    if (control.touched && control.dirty && control.value != null) {
      // return control.invalid;
      return false;
    }
    return false;
  }
}

export function provideDefaultErrorStateMatcher(): Provider {
  return {
    provide: ErrorStateMatcher,
    useClass: ShowOnDirtyErrorStateMatcher,
  };
}
