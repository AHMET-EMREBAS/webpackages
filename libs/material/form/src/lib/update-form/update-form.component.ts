import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
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
import {
  Observable,
  Subscription,
  debounceTime,
  firstValueFrom,
  map,
} from 'rxjs';
import {
  LocalStoreController,
  getEntityCollectionServiceToken,
  getUpdateFormGroupToken,
  getUpdateInputOptionsToken,
} from '@webpackages/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PropertyOptions } from '@webpackages/types';
import { isNotUndefined } from '@webpackages/utils';
import { setFormGroupErrors } from '../form';

@Component({
  selector: 'wp-update-form',
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

  templateUrl: './update-form.component.html',
})
export class UpdateFormComponent<T = any> implements OnInit, OnDestroy {
  isFormSubmitted = false;
  formStore: LocalStoreController<any>;
  formGroup = inject(getUpdateFormGroupToken());
  valueChange: Observable<T>;
  valueChangeSub: Subscription;
  /**
   * The entity id
   */
  @Input() entityId: number;

  /**
   * Localstore name for form value
   */
  @Input() formStoreName: string;

  /**
   * Only emit the form value NOT http request
   */
  @Input() onlyEmitEvent: boolean;

  @Input() submitButtonLabel = 'Submit';

  @Output() submittedEvent = new EventEmitter<any>();

  constructor(
    @Inject(getEntityCollectionServiceToken())
    protected readonly service: EntityCollectionService<T>,
    @Inject(getUpdateInputOptionsToken())
    public readonly inputOptions: PropertyOptions[],
    private readonly route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.entityId =
      this.entityId || parseInt(this.route.snapshot.paramMap.get('id'));

    if (isNotUndefined(this.entityId)) {
      const foundItem = await firstValueFrom(
        this.service.getByKey(this.entityId)
      );

      for (const [key, value] of Object.entries(foundItem)) {
        const c = this.formGroup.get(key);
        if (c) {
          c.setValue(value);
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

      return;
    }

    throw new Error('UpdateForm need id parameters from URL');
  }

  ngOnDestroy(): void {
    this.valueChangeSub?.unsubscribe();
  }

  async handleFormSubmit(event?: any) {
    const formValue = event || { ...this.formGroup.value };

    if (this.onlyEmitEvent) {
      this.submittedEvent.emit({ id: this.entityId, ...formValue });
    } else {
      // Submitting
      try {
        if (this.service) {
          await firstValueFrom(
            this.service?.update(
              { id: this.entityId, ...formValue },
              { isOptimistic: false }
            )
          );
          this.isFormSubmitted = true;
        } else {
          console.warn(`[FormComponent] EntityService is  not provided`);
        }
      } catch (err) {
        setFormGroupErrors(this.formGroup, err);
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
