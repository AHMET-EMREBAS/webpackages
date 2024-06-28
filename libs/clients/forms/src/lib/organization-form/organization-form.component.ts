import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationService } from '@webpackages/clients/ngrx';
import { FormComponent, UpdateFormComponent } from '@webpackages/material/form';
import {
  provideFormGroup,
  provideInputOptions,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import {
  toFormInputOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import { OrganizationMetadata } from '@webpackages/metadata';
import {
  OrganizationFormGroup,
  UpdateOrganizationFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-organization-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    OrganizationService,
    provideFormGroup(OrganizationFormGroup),
    provideInputOptions(toFormInputOptions(OrganizationMetadata)),
  ],
})
export class OrganizationFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-organization-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    OrganizationService,
    provideUpdateFormGroup(UpdateOrganizationFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(OrganizationMetadata)),
  ],
})
export class OrganizationUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}
