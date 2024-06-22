import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../input';

@Component({
  selector: 'wp-input-text',
  standalone: true,
  imports: [CommonModule],
  template: `<p>input-text works!</p>`,
  styles: ``,
})
export class InputTextComponent extends InputComponent {}
