import {
  Component,
  EventEmitter,
  Inject,
  Input,
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
import { firstValueFrom } from 'rxjs';
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
export class UpdateFormComponent<T = any> implements OnInit {
  submitted = false;
  formGroup = inject(getUpdateFormGroupToken());

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

  formStore: LocalStoreController<any>;

  @Output() formSubmitEvent = new EventEmitter<any>();

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
      return;
    }

    throw new Error('UpdateForm need id parameters from URL');
  }

  async handleFormSubmit(event?: any) {
    const formValue = event || { ...this.formGroup.value };

    if (this.onlyEmitEvent) {
      this.formSubmitEvent.emit({ id: this.entityId, ...formValue });
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
          this.submitted = true;
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
