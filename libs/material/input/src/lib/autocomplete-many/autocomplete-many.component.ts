import { Component, inject, signal } from '@angular/core';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { InputModules } from '../input';
import {
  MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import {
  MatChipEvent,
  MatChipInputEvent,
  MatChipsModule,
} from '@angular/material/chips';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { EntitySelectOption } from '@webpackages/types';

@Component({
  selector: 'wp-autocomplete-many',
  standalone: true,
  imports: [InputModules, MatAutocompleteModule, MatChipsModule],
  template: `
    <mat-form-field class="w-full">
      <mat-label>{{ inputLabel }}</mat-label>
      <mat-chip-grid #chipGrid>
        @for (item of selectedItems(); track $index) {
        <mat-chip-row (removed)="remove($event)">
          {{ item.label }}
          <button matChipRemove [attr.aria-label]="'remove ' + item">
            <mat-icon>cancel</mat-icon>
          </button>
        </mat-chip-row>
        }
      </mat-chip-grid>
      <input
        #itemInput
        [formControl]="inputControl"
        [matChipInputFor]="chipGrid"
        [matAutocomplete]="auto"
        [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
        (matChipInputTokenEnd)="addByKeypress($event)"
      />
      <mat-autocomplete
        #auto="matAutocomplete"
        [displayWith]="displayWith"
        (optionSelected)="add($event)"
      >
        @for (option of filteredOptions$ | async; track option) {
        <mat-option [value]="option">{{ option.label }}</mat-option>
        }
      </mat-autocomplete>
    </mat-form-field>

    <br />

    {{ inputControl.value | json }}
    <br />
    <!-- {{ auto.optionActivated | json }} -->
  `,
})
export class AutocompleteManyComponent extends AutocompleteComponent {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly announcer = inject(LiveAnnouncer);

  selectedItems = signal<EntitySelectOption[]>([]);

  protected findByLabel(label: string): EntitySelectOption | undefined {
    return this.autocompleteOptions.find((e) =>
      e?.label?.toLowerCase().includes(label.toLowerCase())
    );
  }

  addByKeypress(event: MatChipInputEvent) {
    const found = this.findByLabel(event.value);
    if (found) {
      this.selectedItems.update((items) => [...items, found]);
    }
  }

  add(event: MatAutocompleteSelectedEvent) {
    this.selectedItems.update((items) => [...items, event.option.value]);
  }

  remove(event: MatChipEvent) {
    const index = this.autocompleteOptions.indexOf(
      this.findByLabel(event.chip.value)!
    );

    this.selectedItems.update((items) => {
      delete items[index];
      return [...items];
    });
  }
}
