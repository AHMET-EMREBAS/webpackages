import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, SkuService } from '@webpackages/clients/ngrx';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  PriceFormComponent,
  ProductFormComponent,
  QuantityFormComponent,
} from '@webpackages/clients/forms';
import { IProduct } from '@webpackages/models';
import { firstValueFrom } from 'rxjs';

/**
 * ### Product Editor
 * - Create Product
 *    - After created the product
 *    - Set the default SKU attributes
 * - Price
 * - Quantity
 * - Serial Number
 */
@Component({
  selector: 'wp-product-editor',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    ProductFormComponent,
    PriceFormComponent,
    QuantityFormComponent,
  ],
  templateUrl: `./product-editor.component.html`,
  providers: [ProductService, SkuService],
})
export class ProductEditorComponent {
  constructor(
    protected readonly productService: ProductService,
    protected readonly skuService: SkuService
  ) {}

  // async handleProductSubmit(event: any) {
  //   await firstValueFrom(
  //     this.productService.add(event, { isOptimistic: false })
  //   );
  // }

  handleProductSubmitSuccess(event: any) {
    console.log('Success: ', event);
  }

  handleProductSubmitError(event: any) {
    console.log('Error: ', event);
  }
}
