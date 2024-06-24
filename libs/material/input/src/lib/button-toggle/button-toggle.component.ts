import { Component, OnInit } from '@angular/core';
import { InputComponent, InputModules } from '../input';
import {
  MatButtonToggleChange,
  MatButtonToggleModule,
} from '@angular/material/button-toggle';

@Component({
  selector: 'wp-button-toggle',
  standalone: true,
  imports: [InputModules, MatButtonToggleModule],
  template: `
    <mat-button-toggle-group
      class="w-full"
      #buttonGroup
      [required]="inputRequired"
      [formControl]="inputControl"
      [multiple]="inputMultiple"
      (change)="handleChange($event)"
      [tabindex]="tabIndex"
    >
      @for(e of inputEnums ; track e){
      <mat-button-toggle #button class="w-full" [value]="e">
        {{ e }}
      </mat-button-toggle>
      }
    </mat-button-toggle-group>
  `,
})
export class ButtonToggleComponent extends InputComponent implements OnInit {
  override ngOnInit(): void {
    super.ngOnInit();
    this.inputControl.markAllAsTouched();
    this.inputControl.markAsDirty();
  }

  handleChange(event: MatButtonToggleChange) {
    if (event.source.isSingleSelector()) {
      // NA
    } else {
      if (this.inputMaxLength) {
        if (event.value.length > this.inputMaxLength) {
          const value = this.inputControl.value;
          const lastValue = value.pop();
          const updatedValue = [
            ...value.slice(0, this.inputMaxLength - 1),
            lastValue,
          ];
          this.inputControl.setValue(updatedValue);
        }
      }
    }
  }
}
