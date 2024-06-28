import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PriceService,
  ProductService,
  QuantityService,
  SkuService,
} from '@webpackages/clients/ngrx';
import {
  MatStep,
  MatStepper,
  MatStepperModule,
} from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  PriceFormComponent,
  ProductFormComponent,
  QuantityFormComponent,
} from '@webpackages/clients/forms';
import { IPrice, IProduct, IQuantity, ISku } from '@webpackages/models';
import { firstValueFrom } from 'rxjs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
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
    MatSnackBarModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    ProductFormComponent,
    PriceFormComponent,
    QuantityFormComponent,
  ],
  templateUrl: `./product-editor.component.html`,
  providers: [ProductService, SkuService, PriceService, QuantityService],
})
export class ProductEditorComponent {
  savedProduct: IProduct;
  savedSkus: ISku[];
  savedPrices: IPrice[];
  savedQuantities: IQuantity[];

  @ViewChild('productEditorStepper') productEditorStepper: MatStepper;
  @ViewChild('productStep') productStep: MatStep;
  @ViewChild('priceStep') priceStep: MatStep;
  @ViewChild('quantityStep') quantityStep: MatStep;
  @ViewChild('serialStep') serialStep: MatStep;
  @ViewChild('attributesStep') attributesStep: MatStep;

  constructor(
    protected readonly productService: ProductService,
    protected readonly skuService: SkuService,
    protected readonly priceService: PriceService,
    protected readonly quantityService: QuantityService,
    protected readonly snackbar: MatSnackBar
  ) {}

  async handleProductSubmitSuccess(event: IProduct) {
    console.log('Success: ', event);
    this.savedProduct = event;
    this.productStep.editable = false;
    this.productEditorStepper.next();
    this.snackbar.open(`Product is created, moving to next step.`, undefined, {
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['!bg-green-400'],
      politeness: 'polite',
      announcementMessage:
        'Successfuly created product and moving to next step.',
    });

    this.savedSkus = await firstValueFrom(
      this.skuService.getWithQuery({ search: event.upc })
    );

    this.savedPrices = await firstValueFrom(
      this.priceService.getWithQuery({ search: event.upc })
    );

    this.savedQuantities = await firstValueFrom(
      this.quantityService.getWithQuery({ search: event.upc })
    );

    console.log('Skus: ', this.savedSkus);
    console.log('Prices: ', this.savedPrices);
    console.log('Quantities: ', this.savedQuantities);
  }

  handleProductSubmitError(event: any) {
    console.log('Error: ', event);
    this.snackbar.open(
      `Please fix the errors in the form to continue.`,
      undefined,
      {
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['!bg-red-400'],
        politeness: 'polite',
        announcementMessage: 'Form is not valid',
      }
    );
  }
}
