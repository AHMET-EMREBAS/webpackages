import { Component, Input, OnInit } from '@angular/core';
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
        [required]="inputRequired!"
        [formControl]="inputControl"
        [minlength]="inputMinLength"
        [maxLength]="inputMaxLength"
        [attr.data-testid]="inputLabel"
        [tabindex]="tabIndex"
      />
      <mat-hint>{{ inputHint }}</mat-hint>
      <mat-error>{{ errorMessage$ | async }} </mat-error>
    </mat-form-field>
  `,
})
export class InputTextComponent extends InputComponent implements OnInit {
  override readonly inputType: InputType = 'text';

  override ngOnInit(): void {
    super.ngOnInit();
    this.inputMinLength = this.inputMinLength ?? 0;
    this.inputMaxLength = this.inputMaxLength ?? 1_000;
  }
}
