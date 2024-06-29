import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
  PriceUpdateFormComponent,
  ProductFormComponent,
  QuantityUpdateFormComponent,
  SerialNumberFormComponent,
} from '@webpackages/clients/forms';
import {
  IPrice,
  IProduct,
  IQuantity,
  ISerialNumber,
  ISku,
} from '@webpackages/models';
import { firstValueFrom } from 'rxjs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { LocalStoreController } from '@webpackages/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';

export type ProductEditorStepType<T> = {
  complete: boolean;
  data: Partial<T>;
};

export type ProductEditorSteps = {
  product?: ProductEditorStepType<IProduct>;
  price?: ProductEditorStepType<IPrice[]>;
  quantity?: ProductEditorStepType<IQuantity[]>;
  serial?: ProductEditorStepType<ISerialNumber[]>;
  complete?: boolean;
};

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
    MatTabsModule,
    PriceUpdateFormComponent,
    QuantityUpdateFormComponent,
    SerialNumberFormComponent,
    MatCheckboxModule,
  ],
  templateUrl: `./product-editor.component.html`,
  providers: [ProductService, SkuService, PriceService, QuantityService],
})
export class ProductEditorComponent implements OnInit, AfterViewInit {
  completedSteps?: ProductEditorSteps;

  savedProduct: IProduct;
  savedSkus: ISku[];
  savedPrices: IPrice[];
  savedQuantities: IQuantity[];
  productEditorStore = new LocalStoreController<ProductEditorSteps>(
    'ProductEditorComponentStore'
  );

  enforceSerialNumber = false;

  @ViewChild('productForm') productForm: ProductFormComponent;
  @ViewChild('productEditorStepper') productEditorStepper: MatStepper;
  @ViewChild('productStep') productStep: MatStep;
  @ViewChild('priceStep') priceStep: MatStep;
  @ViewChild('quantityStep') quantityStep: MatStep;
  @ViewChild('serialStep') serialStep: MatStep;
  @ViewChild('attributesStep') attributesStep: MatStep;
  @ViewChild('finalStep') finalStep: MatStep;

  constructor(
    protected readonly productService: ProductService,
    protected readonly skuService: SkuService,
    protected readonly priceService: PriceService,
    protected readonly quantityService: QuantityService,
    protected readonly snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.completedSteps = this.productEditorStore.get();
  }

  cleanup() {
    this.productEditorStore.delete();
  }

  ngAfterViewInit(): void {
    if (this.completedSteps) {
      // Check all steps and
      if (this.completedSteps.product?.complete) {
        this._1_createdProduct();
      }
      if (this.completedSteps.price?.complete) {
        this._2_createdPrices();
      }

      if (this.completedSteps.quantity?.complete) {
        this._3_createdQuantities();
      }

      if (this.completedSteps.serial?.complete) {
        this._4_createdSerialNumbers();
      }

      if (this.completedSteps.complete) {
        this._5_completed();
      }
      // Done
    }
  }

  _1_createdProduct() {
    this.productStep.completed = true;
    this.productStep.editable = false;

    this.savedPrices = this.completedSteps.price.data;
    setTimeout(() => {
      this.productEditorStepper.next();
    }, 2000);
  }

  _2_createdPrices() {
    this.priceStep.completed = true;
    this.priceStep.editable = false;
    this.savedQuantities = this.completedSteps.quantity.data;
    this.productEditorStepper.next();
  }

  _3_createdQuantities() {
    this.quantityStep.completed = true;
    this.quantityStep.editable = false;
    this.productEditorStepper.next();
  }

  _4_createdSerialNumbers() {
    this.serialStep.completed = true;
    this.serialStep.editable = false;
    this.productEditorStepper.next();
  }

  _5_completed() {
    this.finalStep.completed = true;
    this.finalStep.editable = false;
    this.productForm.reset();
    this.productEditorStore.delete();
    this.productEditorStepper.reset();
  }

  async handleProductSubmitSuccess(event: IProduct) {
    this.savedProduct = event;

    this.snackbar.open(`Product is created, moving to next step.`, undefined, {
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['!bg-green-400'],
      politeness: 'polite',
      announcementMessage:
        'Successfuly created product and moving to next step.',
      duration: 3000,
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

    this.productEditorStore.set({
      product: {
        complete: true,
        data: this.savedProduct,
      },
      price: {
        data: this.savedPrices,
        complete: false,
      },
      quantity: {
        data: this.savedQuantities,
        complete: false,
      },
    });

    console.log('Skus: ', this.savedSkus);
    console.log('Prices: ', this.savedPrices);
    console.log('Quantities: ', this.savedQuantities);
    this._1_createdProduct();
  }

  handleProductSubmitError(event: any) {
    this.snackbar.open(
      `Please fix the errors in the form to continue.`,
      undefined,
      {
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['!bg-red-400'],
        politeness: 'polite',
        announcementMessage: 'Form is not valid',
        duration: 3000,
      }
    );
  }

  handleDefaultPriceSubmitSucces(event: Partial<IPrice>) {
    console.log('Default Price : ', event);
  }

  finishProcess() {
    this._5_completed();
  }
}
