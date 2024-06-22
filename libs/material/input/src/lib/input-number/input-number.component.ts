import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent, InputModules } from '../input/input.component';

@Component({
  selector: 'wp-input-number',
  standalone: true,
  imports: [InputModules],
  template: ` <mat-form-field class="w-full">
    <mat-label>{{ inputLabel }} {{ statusIndicator$ | async }}</mat-label>
    <input
      matInput
      [formControl]="inputControl"
      [minlength]="inputMinLength"
      [maxLength]="inputMaxLength"
      [attr.data-testid]="inputLabel"
    />
    <mat-hint>{{ inputHint }}</mat-hint>
    <mat-error>{{ errorMessage$ | async }} </mat-error>
  </mat-form-field>`,
})
export class InputNumberComponent extends InputComponent {}
