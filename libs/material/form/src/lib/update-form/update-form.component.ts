import {
  Component,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EntityCollectionService } from '@ngrx/data';
import { firstValueFrom } from 'rxjs';
import {
  getEntityCollectionServiceToken,
  getResourceNameToken,
  getUpdateFormGroupToken,
  getUpdateInputOptionsToken,
} from '@webpackages/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PropertyOptions } from '@webpackages/types';
import { isNotUndefined } from '@webpackages/utils';
import { FormComponent, setFormGroupErrors } from '../form';

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
export class UpdateFormComponent<T = any>
  extends FormComponent
  implements OnInit, OnDestroy
{
  override formGroup = inject(getUpdateFormGroupToken());

  /**
   * The entity id
   */
  @Input() entityId: number;

  constructor(
    @Inject(getEntityCollectionServiceToken())
    service: EntityCollectionService<T>,
    @Inject(getUpdateInputOptionsToken())
    inputOptions: PropertyOptions[],
    @Optional()
    @Inject(getResourceNameToken())
    resourceName: string,
    protected readonly route: ActivatedRoute
  ) {
    super(service, inputOptions, resourceName);
  }

  override async ngOnInit() {
    this.entityId =
      this.entityId || parseInt(this.route.snapshot.paramMap.get('id'));

    if (isNotUndefined(this.entityId)) {
      const foundItem = await firstValueFrom(
        this.service.getByKey(this.entityId)
      );

      this.setFormValue(foundItem);

      super.ngOnInit();
      return;
    }

    throw new Error('UpdateForm need id parameters from URL');
  }

  override async handleFormSubmit(event?: any) {
    const formValue = event || { ...this.formGroup.value };

    if (this.onlyEmitEvent) {
      this.submittedEvent.emit({ id: this.entityId, ...formValue });
    } else {
      try {
        if (this.service) {
          const result = await firstValueFrom(
            this.service?.update(
              { id: this.entityId, ...formValue },
              { isOptimistic: false }
            )
          );
          this.submittedEventSuccess.emit(result);

          this.isFormSubmitted = true;
        } else {
          console.warn(`[FormComponent] EntityService is  not provided`);
        }
      } catch (err) {
        this.submittedEventError.emit(err);
        setFormGroupErrors(this.formGroup, err);
      }
    }
  }
}
