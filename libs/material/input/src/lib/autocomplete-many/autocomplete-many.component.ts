import { Component, OnInit, signal } from '@angular/core';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { InputModules } from '../input';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
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
        <mat-chip-row [value]="item" (removed)="remove(item)">
          {{ item.label }}
          <button matChipRemove>
            <mat-icon>cancel</mat-icon>
          </button>
        </mat-chip-row>
        }
      </mat-chip-grid>
      <input
        [tabindex]="tabIndex"
        [formControl]="__searchControl"
        [matChipInputFor]="chipGrid"
        [matAutocomplete]="auto"
        [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
        (matChipInputTokenEnd)="addByKeypress($event)"
        [attr.data-testid]="inputLabel"
        [tabindex]="tabIndex"
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
      <mat-error>{{ errorMessage$ | async }}</mat-error>
    </mat-form-field>
  `,
})
export class AutocompleteManyComponent
  extends AutocompleteComponent
  implements OnInit
{
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  selectedItems = signal<Set<EntitySelectOption>>(new Set());

  protected findByLabel(label: string): EntitySelectOption | undefined {
    return this.autocompleteOptions.find((e) =>
      e?.label?.toLowerCase().includes(label.toLowerCase())
    );
  }

  addByKeypress(event: MatChipInputEvent) {
    const found = this.findByLabel(event.value);
    if (found) {
      this.updateSelectedItems(found);
      event.chipInput.clear();
    }
    this.clearSearch();
    this.clearAutoComplete();
    this.openAutoComplete();
  }

  add(event: MatAutocompleteSelectedEvent) {
    if (event) {
      this.updateSelectedItems(event.option.value);
      this.updateValue();
    }
    this.clearSearch();
    this.openAutoComplete();
  }

  remove(event: EntitySelectOption) {
    this.selectedItems.update((items) => {
      const found = this.findByLabel(event.label);
      if (found) items.delete(found);
      return items;
    });
    this.selectedItems().delete(event);
    this.updateValue();
  }

  clearSearch() {
    this.__searchControl.setValue('');
  }

  clearAutoComplete() {
    this.autoRef.optionSelected.emit();
  }

  openAutoComplete() {
    this.autoRef.opened.emit();
  }

  updateValue() {
    this.inputControl.setValue([...this.selectedItems()]);
  }

  updateSelectedItems(item: EntitySelectOption) {
    const oldSet = [...this.selectedItems()];
    if (oldSet.find((e) => e.id === item.id)) {
      return;
    }

    this.selectedItems.update((items) => new Set([...items, item]));
  }
}
