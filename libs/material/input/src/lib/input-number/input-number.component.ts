import { Component, Input } from '@angular/core';
import { InputComponent, InputModules } from '../input/input.component';
import { InputType } from '@webpackages/types';

@Component({
  selector: 'wp-input-number',
  standalone: true,
  imports: [InputModules],
  template: `
    <mat-form-field class="w-full">
      <mat-label>{{ inputLabel }} {{ statusIndicator$ | async }}</mat-label>
      <input
        matInput
        type="number"
        [tabindex]="tabIndex"
        [formControl]="inputControl"
        [min]="inputMin"
        [max]="inputMax"
        [attr.data-testid]="inputLabel"
        [autocomplete]="inputAutocomplete || 'off'"
        [valueAsNumber]="true"
      />
      <mat-hint>{{ inputHint }}</mat-hint>
      <mat-error>{{ errorMessage$ | async }} </mat-error>
    </mat-form-field>
  `,
})
export class InputNumberComponent extends InputComponent {
  override readonly inputType: InputType = 'number';
}
