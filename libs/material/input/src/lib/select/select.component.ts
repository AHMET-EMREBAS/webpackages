import { Component, Input } from '@angular/core';
import { InputComponent, InputModules } from '../input';
import { MatSelectModule } from '@angular/material/select';
import { EntitySelectOption } from '@webpackages/types';

@Component({
  selector: 'wp-select',
  standalone: true,
  imports: [InputModules, MatSelectModule],
  template: `
    <mat-form-field class="w-full">
      <mat-label>{{ inputLabel }}</mat-label>
      <mat-select
        [tabindex]="tabIndex"
        [formControl]="inputControl"
        [multiple]="inputMultiple"
      >
        @for(option of enumOptions || selectOptions; track option){
        <mat-option [value]="__value(option)">{{ __label(option) }}</mat-option>
        }
      </mat-select>
    </mat-form-field>
  `,
})
export class SelectComponent extends InputComponent {
  @Input() selectOptions: EntitySelectOption[];
  @Input() enumOptions: string[];

  __value(item: any) {
    if (this.enumOptions) {
      return item;
    }
    if (this.inputMultiple) {
      return item;
    }
    return item.id;
  }

  __label(item: any) {
    if (this.enumOptions) {
      return item;
    }
    return item.label;
  }
}
