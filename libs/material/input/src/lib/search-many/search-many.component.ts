import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { AutocompleteManyComponent } from '../autocomplete-many/autocomplete-many.component';
import { InputModules, getHttpSearchQueryBuilderToken } from '../input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import {
  Observable,
  Subscription,
  debounceTime,
  map,
  startWith,
  switchMap,
} from 'rxjs';
import { EntitySelectOption } from '@webpackages/types';
import { HttpClient } from '@angular/common/http';

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
        @for (option of foundOptions(); track option) {
        <mat-option [value]="option">{{ option.label }}</mat-option>
        }
      </mat-autocomplete>
      <mat-error>{{ errorMessage$ | async }}</mat-error>
    </mat-form-field>

    {{ inputControl.value | json }}
  `,
})
export class SearchManyComponent
  extends AutocompleteManyComponent
  implements OnInit, OnDestroy
{
  @Input() pluralResourceName: string;
  searchQueryBuilder = inject(getHttpSearchQueryBuilderToken());

  foundOptions = signal<EntitySelectOption[]>([]);
  httpClient = inject(HttpClient);

  search$: Observable<EntitySelectOption[]>;

  sub: Subscription;

  override ngOnInit(): void {
    this.sub = this.__searchControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(this.inputDebounceTime),
        switchMap((search) => {
          return this.httpClient.get(
            this.searchQueryBuilder(this.pluralResourceName, search || '')
          );
        }),
        map((data) => this.__toEntityOptions(data as any))
      )
      .subscribe((result) => {
        this.foundOptions.update(() => result as EntitySelectOption[]);
      });
  }
  __toEntityOptions(items: any[]): EntitySelectOption[] {
    return items.map((e) => {
      return { id: e.id, label: e.name };
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
