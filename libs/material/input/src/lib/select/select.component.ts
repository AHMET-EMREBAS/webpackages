import { Component, Input } from '@angular/core';
import { InputComponent, InputModules } from '../input';
import { MatSelectModule } from '@angular/material/select';
import { EntitySelectOption } from '@webpackages/types';

@Component({
  selector: 'wp-select',
  standalone: true,
  imports: [InputModules, MatSelectModule],
  template: `
    <mat-select [formControl]="inputControl" [multiple]="inputMultiple">
      <mat-label>{{ inputLabel }}</mat-label>
      @for(option of selectOptions; track option){
      <mat-option [value]="option">{{ option }}</mat-option>
      }
    </mat-select>
  `,
})
export class SelectComponent extends InputComponent {
  @Input() selectOptions: EntitySelectOption[];
}
