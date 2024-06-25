import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InputComponent, InputModules } from '../input';
@Component({
  selector: 'wp-slider-toggle',
  standalone: true,
  imports: [InputModules, MatSlideToggleModule],
  template: `
    <div class="flex flex-row gap-4 w-60">
      <mat-label>{{ inputLabel }}</mat-label>
      <mat-slide-toggle
        [tabindex]="tabIndex"
        [formControl]="inputControl"
        [attr.data-testid]="inputLabel"
      ></mat-slide-toggle>
    </div>
  `,
})
export class SliderToggleComponent extends InputComponent {}
