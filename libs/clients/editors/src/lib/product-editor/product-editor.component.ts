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
import { RawFormComponent } from '@webpackages/material/form';
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
  state = signal<ProductEditorState>({
    price: {},
    product: {},
    quantity: {},
    serial: {},
    sku: {
      complete: true,
    },
  });

  store = new LocalStoreController<ProductEditorState>(
    'ProductEditorStateStore'
  );

  @ViewChild('defaultPriceForm') defaultPriceForm: RawFormComponent;

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

  ngOnInit(): void {
    debug('OnInit');
    this.updateState(this.store.get());
    debug('OnInit end');
  }

  ngAfterViewInit(): void {
    debug('Trying to prepare editor');
    this.prepareEditor();
    debug('Prepared end');
  }

  async getPrices() {
    debug('Getting prices');
    const savedProduct = this.state().product.data;
    if (!savedProduct) {
      throw new Error('The state must have the saved product data!');
    }
    const prices = await firstValueFrom(
      this.priceService.getWithQuery({ skuSku: `eq:${savedProduct.upc}` })
    );

    return prices;
  }

  async getSkus() {
    debug('Getting default skus');
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
    debug('Product success event ', event);
    this.finishAndLock('product', event);
    this.anounce('Created Product');
    const prices = await this.getPrices();
    const skus = await this.getSkus();

    this.updateState({
      price: { data: prices },
      sku: { data: skus, complete: true },
    });
  }

  async handleSerialNumberSubmitEvent(event: Partial<ISerialNumber>) {
    debug('Serial Number Submit Event: ', event);

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
    debug('Default Price Submit Event : ', event);

    const priceData = this.state().price.data;
    if (priceData) {
      for (const price of priceData) {
        try {
          const result = await firstValueFrom(
            this.priceService.update({ id: price.id, ...event } as any)
          );
        } catch (err) {
          this.defaultPriceForm.setErrors(err);
          this.anounce('Fix the form errors to continue!');

          break;
        }
      }
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
      this.priceTabGroup.selectedIndex = selectedIndex + 1;
    }
  }

  previousPreiceTab(selectedIndex: number) {
    const l = this.priceTabGroup._allTabs.length;
    if (selectedIndex == l) {
      this.nextStep();
    } else {
      this.priceTabGroup.selectedIndex = selectedIndex - 1;
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
      debug('Locking product step');
      this.productStep.editable = false;
      this.productStep.completed = true;
      this.stepper.next();
    } else if (step === 'price') {
      debug('Locking price step');
      this.priceStep.editable = false;
      this.priceStep.completed = true;
      this.stepper.next();
    } else if (step === 'serial') {
      debug('Locking serial step');
      this.serialStep.editable = false;
      this.serialStep.completed = true;

      this.stepper.next();
    }
  }

  updateState(newValue?: Partial<ProductEditorState>) {
    debug('trying to update state with ', newValue);
    this.state.update((value) => {
      const updatedValue = { ...value, ...(newValue || {}) };
      debug('saving state to the local store');
      this.store.set(updatedValue);
      return updatedValue;
    });
    debug('Updated state', this.state());
  }

  /**
   * After Loading data detect the active step
   */
  prepareEditor() {
    debug('Preperation start');
    for (const [key, value] of Object.entries(this.state())) {
      if (value.complete) {
        debug(`Configuring steps for ${key} state value `, value.data);
        this.finishAndLock(key as any, value.data);
      }
    }
    debug('Preperation end');
  }

  cleanStore() {
    this.store.delete();
  }

  restartSteps() {
    this.stepper.reset();
    this.cleanStore();
    this.priceTabGroup.selectedIndex = 0;
    this.defaultPriceForm.formGroup.reset();
  }
}
