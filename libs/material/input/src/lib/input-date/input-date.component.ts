import { Component } from '@angular/core';
import { InputComponent, InputModules } from '../input/input.component';
import { InputType } from '@webpackages/types';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
@Component({
  selector: 'wp-input-date',
  standalone: true,
  imports: [InputModules, MatDatepickerModule],
  template: `
    <mat-form-field class="w-full">
      <mat-label>{{ inputLabel }} {{ statusIndicator$ | async }}</mat-label>
      <input
        matInput
        [tabindex]="tabIndex"
        [matDatepicker]="picker"
        [formControl]="inputControl"
        [required]="inputRequired"
        [attr.data-testid]="inputLabel"
      />
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
      <mat-hint>{{ inputHint }}</mat-hint>
      <mat-error>{{ errorMessage$ | async }} </mat-error>
    </mat-form-field>
  `,
  providers: [provideNativeDateAdapter()],
})
export class InputDateComponent extends InputComponent {
  override inputType: InputType = 'date';
}
