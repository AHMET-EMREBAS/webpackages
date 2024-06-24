import { Component, Input } from '@angular/core';
import { InputComponent, InputModules } from '../input/input.component';
import { InputType } from '@webpackages/types';

@Component({
  selector: 'wp-input-textarea',
  standalone: true,
  imports: [InputModules],
  template: ` <mat-form-field class="w-full ">
    <mat-label>{{ inputLabel }} {{ statusIndicator$ | async }}</mat-label>
    <textarea
      [tabIndex]="tabIndex"
      style="resize: none; height:10em"
      type="text"
      matInput
      [tabindex]="tabIndex"
      [required]="inputRequired!"
      [formControl]="inputControl"
      [minlength]="inputMinLength"
      [maxLength]="inputMaxLength"
    ></textarea>
    <mat-hint>{{ inputHint }}</mat-hint>
    <mat-error>{{ errorMessage$ | async }} </mat-error>
  </mat-form-field>`,
})
export class InputTextareaComponent extends InputComponent {
  override readonly inputType: InputType = 'textarea';
}
