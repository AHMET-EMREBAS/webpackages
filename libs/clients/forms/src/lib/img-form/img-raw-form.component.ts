import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { ImgMetadata } from '@webpackages/metadata';
import { ImgRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-img-raw-form',
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
    ImgService,
    provideEntityCollectionService(ImgService),
    provideRawFormGroup(ImgRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(ImgMetadata)),
  ],
})
export class ImgRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
