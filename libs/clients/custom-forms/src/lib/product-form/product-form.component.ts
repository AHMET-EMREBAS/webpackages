import '@webpackages/material/core';
import { Component } from '@angular/core';
import { FormsModule } from '@webpackages/material/core';
import { FormComponent, setFormGroupErrors } from '@webpackages/material/form';
import { MatStepperModule } from '@angular/material/stepper';
import {
  PriceFormGroup,
  ProductFormGroup,
} from '@webpackages/clients/form-groups';
import { IProduct } from '@webpackages/models';
import { ProductService } from '@webpackages/clients/ngrx';

import { firstValueFrom } from 'rxjs';
import { PriceFormComponent } from '@webpackages/clients/forms';

@Component({
  selector: 'wp-product-form',
  standalone: true,
  imports: [FormsModule, FormComponent, PriceFormComponent, MatStepperModule],
  templateUrl: './product-form.component.html',
  providers: [ProductService],
})
export class ProductFormComponent {
  savedProduct: IProduct;
  priceFormGroup = PriceFormGroup;

  constructor(protected readonly service: ProductService) {}

  async formDetailSubmit(event: Partial<IProduct>) {
    console.log('EVENT: ', event);
    try {
      this.savedProduct = await firstValueFrom(
        this.service.add({ ...event } as IProduct)
      );
    } catch (err) {
      setFormGroupErrors(ProductFormGroup, err);
    }
  }
}
