/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getEntityCollectionServiceToken,
  getFormGroupToken,
  getInputOptionsToken,
  getResourceNameToken,
  LocalStoreController,
} from '@webpackages/material/core';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
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
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { DataServiceError, EntityCollectionService } from '@ngrx/data';
import {
  Observable,
  Subscription,
  debounceTime,
  firstValueFrom,
  map,
} from 'rxjs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { PropertyOptions } from '@webpackages/types';

export function setFormGroupErrors(
  formGruop: FormGroup,
  dataServiceError: DataServiceError
) {
  const rawErrors = (dataServiceError as DataServiceError).error.error.errors;
  for (const rawError of rawErrors) {
    const errors = Object.values(rawError);
    for (const e of errors) {
      const control = formGruop.get((e as any)?.property);
      control.setErrors((e as any)?.constraints);
    }
  }
}

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
export class FormComponent<T = any> implements OnInit, OnDestroy {
  isFormSubmitted = false;
  formGroup = inject(getFormGroupToken());
  formStore: LocalStoreController<any>;
  valueChange: Observable<T>;
  valueChangeSub: Subscription;
  /**
   * Localstore name to store the form data
   */
  @Input() formStoreName: string;

  /**
   * Only emit the form value NOT make a http request
   */
  @Input() onlyEmitEvent: boolean;

  @Input() submitButtonLabel = 'Submit';

  @Output() submittedEvent = new EventEmitter<any>();

  @Output() submittedEventSuccess = new EventEmitter<any>();
  @Output() submittedEventError = new EventEmitter<any>();

  /**
   *
   * @param service entity colleciton service
   * @param inputOptions input options that used to create the input elements
   * @param resourceName resource name is used to create local-store for the form also you can pass formStoreName if you are using inline form.
   */
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
      this.formStore = new LocalStoreController(localStoreName);
      const defaultValue = this.formStore?.get();
      if (defaultValue) {
        for (const [key, value] of Object.entries(defaultValue)) {
          this.formGroup.get(key).setValue(value);
        }
      }
    }

    this.valueChange = this.formGroup.valueChanges.pipe(
      debounceTime(600),
      map((data) => {
        this.formStore?.set(data);
        return data;
      })
    );

    this.valueChangeSub = this.valueChange.subscribe();
  }

  ngOnDestroy(): void {
    this.valueChangeSub.unsubscribe();
  }

  async handleFormSubmit(event?: any) {
    const formValue = event || { ...this.formGroup.value };

    if (this.onlyEmitEvent == true) {
      this.submittedEvent.emit({ ...formValue });
    } else {
      // Submitting
      try {
        if (this.service) {
          const result = await firstValueFrom(
            this.service?.add(formValue, { isOptimistic: false })
          );
          this.isFormSubmitted = true;
          this.submittedEventSuccess.emit(result);
        } else {
          console.warn(`[FormComponent] EntityService is  not provided`);
        }
      } catch (err) {
        this.submittedEventError.emit(err);
        setFormGroupErrors(this.formGroup, err);
      }
    }
  }

  setFormValue(formValue: any) {
    const entries = Object.entries(formValue);
    for (const [key, value] of entries) {
      this.formGroup.get(key)?.setValue(value);
    }
  }

  handleFormSubmitSuccess(event: any) {
    this.submittedEventSuccess.emit(event);
  }

  handleFormSubmitError(event: any) {
    this.submittedEventError.emit(event);
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
    this.formGroup.setErrors(null);
  }
}
