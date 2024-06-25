import { Component } from '@angular/core';
import { FormsModule } from '@webpackages/material/core';
import { FormComponent } from '@webpackages/material/form';
@Component({
  selector: 'wp-product-form',
  standalone: true,
  imports: [FormsModule, FormComponent],
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent {}
