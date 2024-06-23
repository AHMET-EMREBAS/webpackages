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
import { InputModules, getHttpSearchQueryBuilderToken } from '../input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

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
    {{ foundOptions().length }} |
    {{ inputControl.value | json }}
  `,
})
export class SearchComponent
  extends AutocompleteComponent
  implements OnInit, OnDestroy
{
  @Input() resourcePath: string;
  searchQueryBuilder = inject(getHttpSearchQueryBuilderToken());

  foundOptions = signal<EntitySelectOption[]>([]);
  httpClient = inject(HttpClient);

  search$: Observable<EntitySelectOption[]>;
  sub: Subscription;
  @Output() foundEvent = new EventEmitter();

  override ngOnInit(): void {
    this.sub = this.__searchControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(this.inputDebounceTime),
        switchMap((search) => {
          return this.httpClient.get(
            this.searchQueryBuilder(this.resourcePath, search || '')
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
