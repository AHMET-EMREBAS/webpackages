import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { InputComponent, InputModules } from '../input';
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { Observable, debounceTime, map, startWith } from 'rxjs';
import { EntitySelectOption } from '@webpackages/types';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'wp-autocomplete',
  standalone: true,
  imports: [InputModules, MatAutocompleteModule],
  template: `
    <mat-form-field class="w-full">
      <mat-label>{{ inputLabel }}</mat-label>
      <input
        type="text"
        matInput
        [required]="!!inputRequired"
        [formControl]="__searchControl"
        [matAutocomplete]="auto"
        [multiple]="inputMultiple"
      />
      <mat-autocomplete
        #auto="matAutocomplete"
        [displayWith]="displayWith"
        (optionSelected)="__optionSelect($event)"
      >
        @for (option of filteredOptions$ | async; track option) {
        <mat-option [value]="option">{{ option.label }}</mat-option>
        }
      </mat-autocomplete>
      <mat-error>{{ errorMessage$ | async }}</mat-error>
    </mat-form-field>
  `,
})
export class AutocompleteComponent extends InputComponent implements OnInit {
  @ViewChild('auto') autoRef: MatAutocomplete;

  @Input() autocompleteListSize = 20;
  
  filteredOptions$: Observable<EntitySelectOption[]>;

  readonly __searchControl = new FormControl('');

  @Input() autocompleteOptions: EntitySelectOption[];

  override ngOnInit(): void {
    super.ngOnInit();
    this.filteredOptions$ = this.__searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(1000),
      map((e) => this.__filter(e)),
      map((e) => this.__slice(e))
    );
  }

  displayWith(option: EntitySelectOption) {
    return option?.label;
  }

  __filter(search: string | null) {
    if (typeof search === 'string') {
      return this.autocompleteOptions.filter((value) => {
        return value.label.toLowerCase().includes(search.toLowerCase());
      });
    }
    return this.autocompleteOptions;
  }

  __optionSelect(event: MatAutocompleteSelectedEvent) {
    this.inputControl.setValue(event.option.value.id);
  }

  __slice(items: EntitySelectOption[]) {
    return items.slice(0, this.autocompleteListSize);
  }
}
