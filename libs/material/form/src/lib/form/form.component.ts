/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Optional,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  InputTextComponent,
  InputNumberComponent,
  InputDateComponent,
  AutocompleteComponent,
  SearchComponent,
  SearchManyComponent,
  InputTextareaComponent,
  AutocompleteManyComponent,
  SelectComponent,
} from '@webpackages/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataServiceError, EntityCollectionService } from '@ngrx/data';
import { Observable, debounceTime, firstValueFrom, map, } from 'rxjs';
import {
  getEntityCollectionServiceToken,
  getFormGroupToken,
  getInputOptionsToken,
  getResourceNameToken,
  LocalStoreController,
} from '@webpackages/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { PropertyOptions } from '@webpackages/types';

@Component({
  selector: 'wp-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextComponent,
    InputNumberComponent,
    InputDateComponent,
    InputTextareaComponent,
    AutocompleteComponent,
    AutocompleteManyComponent,
    SearchComponent,
    SearchManyComponent,
    SelectComponent,

    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  templateUrl: './form.component.html',

  styles: ` 
  @media screen and (max-width:600px){ 
    form > *{ 
        width:100%
    }
  }
  `,
})
export class FormComponent<T = any> implements OnInit {
  submitted = false;
  formGroup = inject(getFormGroupToken());
  formStore: LocalStoreController<any>;

  @Input() formStoreName: string;
  @Input() onlyEmitEvent: boolean;
  @Input() submitButtonLabel = 'Submit';

  @Output()
  submitEvent = new EventEmitter<T>();

  valueChange: Observable<T>;

  constructor(
    @Optional()
    @Inject(getEntityCollectionServiceToken())
    protected readonly service: EntityCollectionService<T>,
    @Inject(getInputOptionsToken())
    public readonly inputOptions: PropertyOptions[],

    @Optional()
    @Inject(getResourceNameToken())
    public readonly resourceName: string
  ) {}

  ngOnInit(): void {
    const localStoreName = this.resourceName || this.formStoreName;
    if (localStoreName) {
      this.formStore =  new LocalStoreController(localStoreName);
      if (this.formStore) {
        const defaultValue = this.formStore?.get();
        if (defaultValue) {
          this.formGroup.setValue(defaultValue);
        }
      }
      throw new Error('Local Store is not created!');
    }

    this.valueChange = this.formGroup.valueChanges.pipe(
      debounceTime(600),
      map((data) => {
        this.formStore?.set(data);
        return data;
      })
    );
    this.valueChange.subscribe((value) => {
      console.log(value);
    });
  }
  async saveItem() {
    if (this.onlyEmitEvent) {
      this.submitEvent.emit(this.formGroup.value);
    } else {
      // Submitting
      try {
        if (this.service) {
          await firstValueFrom(
            this.service?.add(
              { ...this.formGroup.value },
              {
                isOptimistic: false,
              }
            )
          );

          this.submitted = true;
        } else {
          console.warn(`[FormComponent] EntityService is  not provided`);
        }
      } catch (err) {
        const rawErrors = (err as DataServiceError).error.error.errors;
        for (const rawError of rawErrors) {
          const errors = Object.values(rawError);
          for (const e of errors) {
            const control = this.control((e as any)?.property);
            control.setErrors((e as any)?.constraints);
          }
        }
      }
    }
  }

  control(name: string) {
    if (this.formGroup) {
      return this.formGroup.get(name) as FormControl;
    }
    throw new Error(`Form group is not provided!`);
  }

  reset() {
    this.formGroup.reset({}, { emitEvent: false });
    this.formGroup.markAsUntouched();
  }
}
