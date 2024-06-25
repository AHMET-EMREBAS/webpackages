import { Component, Inject, inject } from '@angular/core';
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
} from '@webpackages/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EntityCollectionService } from '@ngrx/data';
import { catchError, of } from 'rxjs';
import {
  InputOption,
  getEntityCollectionServiceToken,
  getFormGroupToken,
  getInputOptionsToken,
} from '@webpackages/material/core';

@Component({
  selector: 'wp-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextComponent,
    InputNumberComponent,
    InputDateComponent,
    InputTextareaComponent,
    AutocompleteComponent,
    SearchComponent,
    SearchManyComponent,
    MatButtonModule,
    MatIconModule,
  ],
  template: `
    <form class="w-full">
      @for(option of inputOptions; track option){

      <!-- Number Input -->
      @if(option.inputType ==='text'){
      <wp-input-text
        [inputName]="option.name!"
        [inputLabel]="option.label"
      ></wp-input-text>
      }

      <!-- Textarea -->
      @else if(option.inputType ==='textarea'){
      <wp-input-textarea
        [inputName]="option.name || 'unkown'"
        [inputLabel]="option.label || 'Unkown'"
      ></wp-input-textarea>
      }

      <!-- Number -->
      @else if(option.inputType ==='number'){
      <wp-input-number
        [inputName]="option.name || 'unkown'"
        [inputLabel]="option.label || 'Unkown'"
      ></wp-input-number>
      }

      <!-- Number -->
      @else{
      <wp-input-text
        [inputName]="option.name || 'unkown'"
        [inputLabel]="option.label || 'Unkown'"
      ></wp-input-text>
      }

      <!-- End -->
      }
      <div class="flex flex-row gap-4">
        <button
          class="w-full"
          mat-raised-button
          color="primary"
          (click)="saveItem()"
        >
          Save
        </button>
        <button class="w-full" mat-raised-button>Reset</button>
      </div>
    </form>
  `,
  styles: ``,
})
export class CreateComponent<T = any> {
  formGroup = inject(getFormGroupToken());

  constructor(
    @Inject(getEntityCollectionServiceToken())
    protected readonly service: EntityCollectionService<T>,
    @Inject(getInputOptionsToken())
    public readonly inputOptions: InputOption[]
  ) {}

  saveItem() {
    this.service?.add(this.formGroup?.value, { isOptimistic: false }).pipe(
      catchError((error) => {
        console.log('ERror : ', error);
        return of(null);
      })
    );
  }
}
