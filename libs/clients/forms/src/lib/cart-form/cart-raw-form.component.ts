import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { CartMetadata } from '@webpackages/metadata';
import { CartRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-cart-raw-form',
  standalone: true,
  imports: [CommonModule, RawFormComponent],
  template: `
    <wp-raw-form
      #rawFormRef
      (submittedEvent)="handleFormSubmit($event)"
      [submitButtonLabel]="submitButtonLabel"
      [formStoreName]="formStoreName"
    ></wp-raw-form>
  `,
  providers: [
    CartService,
    provideEntityCollectionService(CartService),
    provideRawFormGroup(CartRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(CartMetadata)),
  ],
})
export class CartRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
