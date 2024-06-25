import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { AutocompleteManyComponent } from '../autocomplete-many/autocomplete-many.component';
import { InputModules } from '../input';
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
import { getHttpSearchQueryBuilderToken } from '@webpackages/material/core';

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
        [tabindex]="tabIndex"
        [matChipInputFor]="chipGrid"
        [matAutocomplete]="auto"
        [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
        (matChipInputTokenEnd)="addByKeypress($event)"
        [attr.data-testid]="inputLabel"
      />
      <mat-autocomplete
        #auto="matAutocomplete"
        [displayWith]="displayWith"
        (optionSelected)="add($event)"
        ><mat-option [value]="null"> ----None </mat-option>
        @for (option of foundOptions(); track option) {
        <mat-option [value]="option">{{ option.label }}</mat-option>
        }
      </mat-autocomplete>
      <mat-error>{{ errorMessage$ | async }}</mat-error>
    </mat-form-field>
  `,
})
export class SearchManyComponent
  extends AutocompleteManyComponent
  implements OnInit, OnDestroy
{
  @Input() resourceName: string;

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
            this.searchQueryBuilder(this.resourceName, search || '')
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

  protected override findByLabel(
    label: string
  ): EntitySelectOption | undefined {
    return this.foundOptions().find((e) =>
      e.label.toLowerCase().includes(label.toLowerCase())
    );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
