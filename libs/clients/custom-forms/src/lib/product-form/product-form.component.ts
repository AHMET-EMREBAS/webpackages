import '@webpackages/material/core';
import { Component } from '@angular/core';
import { FormsModule } from '@webpackages/material/core';
import { FormComponent } from '@webpackages/material/form';
import { MatStepperModule } from '@angular/material/stepper';
import { PriceFormGroup } from '@webpackages/clients/form-groups';
import { IProduct } from '@webpackages/models';
import { ProductService } from '@webpackages/clients/ngrx';
@Component({
  selector: 'wp-product-form',
  standalone: true,
  imports: [FormsModule, FormComponent, MatStepperModule],
  templateUrl: './product-form.component.html',
  providers: [ProductService],
})
export class ProductFormComponent {
  priceFormGroup = PriceFormGroup;

  constructor(protected readonly service: ProductService) {}

  formDetailSubmit(event: Partial<IProduct>) {
    console.log(event);
  }
}
