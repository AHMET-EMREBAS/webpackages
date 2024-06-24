import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  inject,
  signal,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  Subscription,
  debounceTime,
  map,
  of,
  startWith,
  switchMap,
} from 'rxjs';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { EntitySelectOption } from '@webpackages/types';
import { InputModules } from '../input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { getHttpSearchQueryBuilderToken } from '@webpackages/material/core';

@Component({
  selector: 'wp-search',
  standalone: true,
  imports: [InputModules, MatAutocompleteModule],
  template: `
    <mat-form-field class="w-full">
      <mat-label>{{ inputLabel }}</mat-label>
      <input
        type="text"
        matInput
        [tabindex]="tabIndex"
        [formControl]="__searchControl"
        [matAutocomplete]="auto"
        [multiple]="inputMultiple"
      />
      <mat-autocomplete
        #auto="matAutocomplete"
        [displayWith]="displayWith"
        (optionSelected)="__optionSelect($event)"
      >
        @for (option of foundOptions(); track option) {
        <mat-option [value]="option">{{ option.label }}</mat-option>
        }
      </mat-autocomplete>
      <mat-error>{{ errorMessage$ | async }}</mat-error>
    </mat-form-field>
  `,
})
export class SearchComponent
  extends AutocompleteComponent
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
