import { Component, Input, OnInit } from '@angular/core';
import { InputComponent, InputModules } from '../input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, debounceTime, map, startWith } from 'rxjs';
import { EntitySelectOption } from '@webpackages/types';

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
        [required]="inputRequired"
        [formControl]="inputControl"
        [matAutocomplete]="auto"
        [multiple]="inputMultiple"
      />
      <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayWith">
        @for (option of filteredOptions$ | async; track option) {
        <mat-option [value]="option">{{ option.label }}</mat-option>
        }
      </mat-autocomplete>
    </mat-form-field>
  `,
})
export class AutocompleteComponent extends InputComponent implements OnInit {
  filteredOptions$: Observable<EntitySelectOption[]>;

  @Input() autocompleteOptions: EntitySelectOption[];

  override ngOnInit(): void {
    super.ngOnInit();
    this.filteredOptions$ = this.inputControl.valueChanges.pipe(
      startWith(''),
      debounceTime(1000),
      map((e) => {
        return this.autocompleteOptions
          .filter((value) => {
            return value.label.toLowerCase().includes(e.toLowerCase());
          })
          .slice(0, 10);
      })
    );
  }

  displayWith(option: EntitySelectOption) {
    return option.label;
  }
}
