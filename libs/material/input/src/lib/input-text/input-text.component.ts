import { Component } from '@angular/core';
import { InputComponent, InputModules } from '../input';
import { InputType } from '@webpackages/types';

@Component({
  selector: 'wp-input-text',
  standalone: true,
  imports: [InputModules],
  template: `
    <mat-form-field class="w-full">
      <mat-label>{{ inputLabel }} {{ statusIndicator$ | async }}</mat-label>
      <input
        type="text"
        matInput
        [formControl]="inputControl"
        [minlength]="inputMinLength"
        [maxLength]="inputMaxLength"
        [attr.data-testid]="inputLabel"
      />
      <mat-hint>{{ inputHint }}</mat-hint>
      <mat-error>{{ errorMessage$ | async }} </mat-error>
    </mat-form-field>
  `,
})
export class InputTextComponent extends InputComponent {
  override inputType: InputType = 'text';
}
