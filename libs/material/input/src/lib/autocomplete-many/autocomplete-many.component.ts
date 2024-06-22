import { Component, OnInit, inject, signal } from '@angular/core';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { InputModules } from '../input';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { EntitySelectOption } from '@webpackages/types';
import { FormControl } from '@angular/forms';
import { debounceTime, map, startWith } from 'rxjs';

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
        [formControl]="__searchControl"
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
  `,
})
export class AutocompleteManyComponent
  extends AutocompleteComponent
  implements OnInit
{
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly announcer = inject(LiveAnnouncer);
  // readonly searchControl = new FormControl<string>('');

  selectedItems = signal<Set<EntitySelectOption>>(new Set());

  override ngOnInit(): void {
    super.ngOnInit();

    // this.filteredOptions$ = this.searchControl.valueChanges.pipe(
    //   startWith(''),
    //   debounceTime(this.inputDebounceTime),
    //   map(this.filter)
    // );
  }

  protected findByLabel(label: string): EntitySelectOption | undefined {
    return this.autocompleteOptions.find((e) =>
      e?.label?.toLowerCase().includes(label.toLowerCase())
    );
  }

  addByKeypress(event: MatChipInputEvent) {
    const found = this.findByLabel(event.value);
    if (found) {
      this.selectedItems().add(found);
      this.inputControl.setValue(null);
    }
  }

  add(event: MatAutocompleteSelectedEvent) {
    this.selectedItems.update(
      (items) => new Set([...items, event.option.value])
    );
    this.inputControl.setValue(null);
  }

  remove(event: EntitySelectOption) {
    this.selectedItems().delete(event);
    // this.selectedItems.update((items) => items);
    // this.findByLabel()

    // const index = this.autocompleteOptions.indexOf();

    // this.selectedItems.update((items) => {
    //   delete items[index];
    //   return [...items];
    // });
  }
}
