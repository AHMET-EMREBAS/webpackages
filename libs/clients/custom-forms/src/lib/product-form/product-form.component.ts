import { Component, Inject } from '@angular/core';
import { FormsModule, getFormGroupToken } from '@webpackages/material/core';
import { FormComponent } from '@webpackages/material/form';
import { MatStepperModule } from '@angular/material/stepper';
import { FormGroup } from '@angular/forms';
import { PriceFormGroup } from '@webpackages/clients/form-groups';
@Component({
  selector: 'wp-product-form',
  standalone: true,
  imports: [FormsModule, FormComponent, MatStepperModule],
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent {
  priceFormGroup = PriceFormGroup;

  constructor(
    @Inject(getFormGroupToken()) public readonly formGroup: FormGroup
  ) {}
}
