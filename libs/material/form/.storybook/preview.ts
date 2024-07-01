// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview, applicationConfig } from '@storybook/angular';
import { withActions } from '@storybook/addon-actions/decorator';

import { setCompodocJson } from '@storybook/addon-docs/angular';
import { Injectable } from '@angular/core';
setCompodocJson(await import('./documentation.json'));
import { ErrorStateMatcher } from '@angular/material/core';
import { AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
@Injectable()
class CustomerErrorStateMatcher extends ErrorStateMatcher {
  override isErrorState(
    control: AbstractControl<any, any>,
    form: FormGroupDirective | NgForm
  ): boolean {
    if (control.touched && control.dirty) {
      return control.invalid;
    }
    return false;
  }
}
const preview: Preview = {
  parameters: {},
  decorators: [
    withActions,

    applicationConfig({
      providers: [
        {
          provide: ErrorStateMatcher,
          useClass: CustomerErrorStateMatcher,
        },
      ],
    }),
  ],
};

export default preview;
