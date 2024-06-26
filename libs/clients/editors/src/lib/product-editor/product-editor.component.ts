/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PriceService,
  ProductService,
  QuantityService,
  SerialNumberService,
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
  PriceRawFormComponent,
  ProductFormComponent,
  QuantityUpdateFormComponent,
  SerialNumberFormComponent,
  SerialNumberRawFormComponent,
} from '@webpackages/clients/forms';
import {
  IPrice,
  IProduct,
  IQuantity,
  ISerialNumber,
  ISku,
} from '@webpackages/models';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { LocalStoreController } from '@webpackages/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { firstValueFrom } from 'rxjs';
import { FormComponent, RawFormComponent } from '@webpackages/material/form';
import { v4 } from 'uuid';

export type ProductEditorStepState<T> = {
  complete?: boolean;
  data?: Partial<T>;
};

export type ProductEditorState = {
  product?: ProductEditorStepState<IProduct>;
  price?: ProductEditorStepState<IPrice[]>;
  quantity?: ProductEditorStepState<IQuantity[]>;
  serial?: ProductEditorStepState<ISerialNumber[]>;
  sku?: ProductEditorStepState<ISku[]>;
};

function debug(msg: string, data?: any) {
  console.log(`[ Product Editor ]  `, msg);
  data && console.table(data);
}

const defaultState: ProductEditorState = {
  product: {},
  price: {},
  quantity: {},
  serial: {},
  sku: {
    complete: true,
  },
};

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
    PriceRawFormComponent,
    QuantityUpdateFormComponent,
    SerialNumberFormComponent,
    SerialNumberRawFormComponent,
    MatCheckboxModule,
  ],
  templateUrl: `./product-editor.component.html`,
  providers: [
    ProductService,
    SkuService,
    PriceService,
    SerialNumberService,
    QuantityService,
  ],
})
export class ProductEditorComponent implements OnInit, AfterViewInit {
  state = signal<ProductEditorState>({ ...defaultState });

  store = new LocalStoreController<ProductEditorState>('product_editor');

  @ViewChild('defaultPriceForm') defaultPriceForm: RawFormComponent;

  @ViewChild('productForm') productForm: FormComponent;

  @ViewChild('serialNumberForm') serialNumberForm: FormComponent;

  @ViewChild('productEditorStepper') stepper: MatStepper;

  @ViewChild('priceTabGroup') priceTabGroup: MatTabGroup;

  @ViewChild('productStep') productStep: MatStep;

  @ViewChild('priceStep') priceStep: MatStep;

  @ViewChild('serialStep') serialStep: MatStep;

  constructor(
    protected readonly productService: ProductService,
    protected readonly skuService: SkuService,
    protected readonly priceService: PriceService,
    protected readonly quantityService: QuantityService,
    protected readonly serialService: SerialNumberService,
    protected readonly snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.updateState(this.store.get());
  }

  async ngAfterViewInit() {
    await this.ngAfterViewInit1();
    await this.ngAfterViewInit3();
  }

  async ngAfterViewInit3() {
    for (const [key, value] of Object.entries(this.state())) {
      if (value.complete) {
        this.finishAndLock(key as any, value.data);
      }
    }
  }

  async ngAfterViewInit1() {
    const prices = await this.getPrices();
    this.state.update((value) => {
      return {
        ...value,
        price: {
          ...value.price,
          data: prices,
        },
      };
    });
  }

  async getPrices() {
    const savedProduct = this.state().product.data;

    if (savedProduct) {
      const prices = await firstValueFrom(
        this.priceService.getWithQuery({ skuSku: `eq:${savedProduct.upc}` })
      );

      return prices;
    }
    return [];
  }

  async getSkus() {
    const savedProduct = this.state().product.data;
    if (!savedProduct) {
      throw new Error('The state must have the saved product data!');
    }
    const skus = await firstValueFrom(
      this.skuService.getWithQuery({ productUpc: `eq:${savedProduct.upc}` })
    );
    return skus;
  }

  async handleProductSubmitSuccessEvent(event: IProduct) {
    const productView = await firstValueFrom(
      this.productService.getByKey(event.id)
    );

    this.finishAndLock('product', productView);
    this.anounce('Created Product');
    const prices = await this.getPrices();
    const skus = await this.getSkus();

    this.updateState({
      price: { data: prices },
      sku: { data: skus, complete: true },
    });
  }

  async handleSerialNumberSubmitEvent(event: Partial<ISerialNumber>) {
    const savedSerial = await firstValueFrom(
      this.serialService.add({
        ...event,
        product: this.state().product.data as IProduct,
        serialNumber: `${event.prefix || ''}${v4()}`,
      } as any)
    );

    this.finishAndLock('serial', savedSerial);
  }

  async handleDefaultPriceSubmitEvent(event: Partial<IPrice>) {
    const priceData = this.state().price.data;
    if (priceData) {
      for (const price of priceData) {
        try {
          await firstValueFrom(
            this.priceService.update({ id: price['eid'], ...event } as any)
          );
        } catch (err) {
          this.defaultPriceForm.setErrors(err);
          this.anounce('Fix the form errors to continue!');
          break;
        }
      }

      //
      if (this.defaultPriceForm.formGroup.valid) {
        const updatedPrices = await this.getPrices();
        this.updateState({ price: { data: updatedPrices } });
        this.priceTabGroup.selectedIndex += 1;
        this.anounce('Successfully updated the prices.');
      }
    }
  }

  async nextPriceTab(selectedIndex?: number) {
    selectedIndex = selectedIndex ?? this.priceTabGroup.selectedIndex;
    const l = this.priceTabGroup._allTabs.length;
    if (selectedIndex == l) {
      const prices = await this.getPrices();
      this.finishAndLock('price', prices);
    } else {
      this.priceTabGroup.selectedIndex += 1;
    }
  }

  previousPreiceTab(selectedIndex: number) {
    const l = this.priceTabGroup._allTabs.length;
    if (selectedIndex == l) {
      this.nextStep();
    } else {
      this.priceTabGroup.selectedIndex -= 1;
    }
  }

  nextStep() {
    this.stepper.next();
  }

  previousStep() {
    this.stepper.previous();
  }

  isComplete(key: keyof ProductEditorState) {
    return this.state()[key];
  }

  getStepData(key: keyof ProductEditorState) {
    return this.state()[key].complete;
  }

  anounce(announcementMessage: string) {
    this.snackbar.open(announcementMessage, undefined, {
      verticalPosition: 'top',
      horizontalPosition: 'center',
      politeness: 'polite',
      announcementMessage,
      duration: 3000,
    });
  }

  finishAndLock(step: keyof ProductEditorState, data: any) {
    debug(`Atemping to lock the ${step} step`);

    this.updateState({ [step]: { complete: true, data } });

    if (step === 'product') {
      this.productStep.editable = false;
      this.productStep.completed = true;
      this.stepper.next();
    } else if (step === 'price') {
      this.priceStep.editable = false;
      this.priceStep.completed = true;
      this.stepper.next();
    } else if (step === 'serial') {
      this.serialStep.editable = false;
      this.serialStep.completed = true;

      this.stepper.next();
    }
  }

  updateState(newValue?: Partial<ProductEditorState>) {
    this.state.update((value) => {
      const updatedValue = { ...value, ...(newValue || {}) };
      this.store.set(updatedValue);
      return updatedValue;
    });
  }

  cleanStore() {
    this.store.delete();
    this.state.update(() => ({ ...defaultState }));
  }

  async restartSteps() {
    this.cleanStore();
    this.stepper.reset();

    this.productStep.completed = false;
    this.productStep.editable = true;

    this.priceStep.completed = false;
    this.priceStep.editable = true;

    this.stepper.steps.forEach((e) => {
      e.reset();
      e.completed = false;
      e.editable = true;
    });

    this.defaultPriceForm?.reset();
    this.productForm?.reset();
    this.serialNumberForm?.reset();
    setTimeout(async () => {
      await this.ngAfterViewInit();
    }, 1000);
  }

  createSubStore(name: string, variant = '') {
    const { product } = this.state();
    const productId = product.data?.['id'] || '';
    return this.store.createSubStore(name, `${productId}${variant}`);
  }
}
