/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { InputComponent, InputModules } from '../input';
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import {
  MatChipGrid,
  MatChipInputEvent,
  MatChipsModule,
} from '@angular/material/chips';
import {
  Observable,
  Subscription,
  debounceTime,
  startWith,
  switchMap,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getHttpSearchQueryBuilderToken } from '@webpackages/material/core';
import { FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'wp-search-many',
  standalone: true,
  imports: [InputModules, MatAutocompleteModule, MatChipsModule],
  template: `
    <mat-form-field class="w-full">
      <mat-label>{{ inputLabel }}</mat-label>
      <mat-chip-grid #chipGrid>
        @for (item of selectedItems(); track $index) {
        <mat-chip-row [value]="item" (removed)="remove(item)">
          {{ item[resourceLabelProperty] }}
          <button matChipRemove>
            <mat-icon>cancel</mat-icon>
          </button>
        </mat-chip-row>
        }
      </mat-chip-grid>
      <input
        [formControl]="__searchControl"
        [tabindex]="tabIndex"
        [matChipInputFor]="chipGrid"
        [matAutocomplete]="searchAutoComplete"
        [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
        (matChipInputTokenEnd)="addByKeypress($event)"
        [attr.data-testid]="inputLabel"
        [tabindex]="tabIndex"
      />
      <mat-autocomplete
        #searchAutoComplete="matAutocomplete"
        [displayWith]="searchDisplayWith(resourceLabelProperty)"
        (optionSelected)="add($event)"
      >
        @for (option of foundOptions(); track option) {
        <mat-option [value]="option">{{
          option[resourceLabelProperty]
        }}</mat-option>
        }
      </mat-autocomplete>
      <mat-error>{{ errorMessage$ | async }}</mat-error>
    </mat-form-field>
  `,
})
export class SearchManyComponent
  extends InputComponent
  implements OnInit, OnDestroy, AfterContentInit
{
  @ViewChild('chipGrid') chipGrid: MatChipGrid;
  @ViewChild('searchAutoComplete') searchAutoComplete: MatAutocomplete;
  @Input() resourceName: string;
  @Input() resourceLabelProperty: string;

  searchQueryBuilder = inject(getHttpSearchQueryBuilderToken());

  foundOptions = signal<any[]>([]);
  httpClient = inject(HttpClient);

  __searchControl = new FormControl(null);
  search$: Observable<any[]>;

  sub: Subscription;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  selectedItems = signal<Set<any>>(new Set());

  override ngOnInit(): void {
    this.sub = this.__searchControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(this.inputDebounceTime),
        switchMap((search) => {
          return this.httpClient.get(
            this.searchQueryBuilder(this.resourceName, search || '')
          );
        })
      )
      .subscribe((result) => {
        this.foundOptions.update(() => result as any[]);
      });
  }

  ngAfterContentInit(): void {
    if (this.inputControl.value) {
      const defaultOptions = this.inputControl.value;
      if (defaultOptions) this.selectedItems.update(() => defaultOptions);
    }
  }

  protected findBy(key: string, value: string): any | undefined {
    return this.foundOptions().find((e) =>
      e ? e[key]?.toLowerCase().includes(value?.toLowerCase()) : null
    );
  }

  searchDisplayWith(propertyName: string) {
    return (option: any) => {
      if (option) {
        return option[propertyName];
      }
      return '';
    };
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  noneValue() {
    return {
      [this.resourceLabelProperty]: '---- None ----',
    };
  }

  addByKeypress(event: MatChipInputEvent) {
    const found = this.findBy(this.resourceLabelProperty, event.value);
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

  remove(event: any) {
    this.selectedItems.update((items) => {
      const found = this.findBy(
        this.resourceLabelProperty,
        event[this.resourceLabelProperty]
      );
      if (found) items.delete(found);
      return items;
    });
    this.selectedItems().delete(event);
    this.updateValue();
  }

  clearSearch() {
    this.__searchControl.setValue(null);
  }

  clearAutoComplete() {
    this.searchAutoComplete?.optionSelected.emit();
  }

  openAutoComplete() {
    this.searchAutoComplete?.opened.emit();
  }

  updateValue() {
    this.inputControl.setValue([...this.selectedItems()]);
  }

  updateSelectedItems(item: any) {
    const oldSet = [...this.selectedItems()];
    if (oldSet.find((e) => e.id === item.id)) {
      return;
    }

    this.selectedItems.update((items) => new Set([...items, item]));
  }
}
