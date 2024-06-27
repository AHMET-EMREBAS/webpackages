import { Component, Input, OnInit } from '@angular/core';
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
        [autocomplete]="inputAutocomplete || 'off'"
        [valueAsNumber]="true"
        [attr.data-testid]="inputLabel"
        [tabindex]="tabIndex"
      />
      <mat-hint>{{ inputHint }}</mat-hint>
      <mat-error>{{ errorMessage$ | async }} </mat-error>
    </mat-form-field>
  `,
})
export class InputNumberComponent extends InputComponent implements OnInit {
  override readonly inputType: InputType = 'number';

  override ngOnInit(): void {
    super.ngOnInit();
    this.inputMin = this.inputMin ?? Number.MIN_SAFE_INTEGER;
    this.inputMax = this.inputMax ?? Number.MAX_SAFE_INTEGER;
  }
}
