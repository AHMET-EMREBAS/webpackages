import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'wp-input',
  template: ``,
})
export class InputComponent {
  @Input() inputControl: FormControl;
  
}
