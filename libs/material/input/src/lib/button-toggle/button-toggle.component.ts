import { Component } from '@angular/core';
import { FormModules, InputComponent } from '../input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
@Component({
  selector: 'wp-button-toggle',
  standalone: true,
  imports: [FormModules, MatButtonToggleModule],
  template: `
    <mat-button-toggle-group
      aria-label="label"
      [(value)]="inputControl.value"
      [multiple]="true"
    >
      @for(e of inputEnums ; track e){
      <mat-button-toggle [value]="e">{{ e }}</mat-button-toggle>
      }
    </mat-button-toggle-group>
    <br />
  `,
  styles: ``,
})
export class ButtonToggleComponent extends InputComponent {}
