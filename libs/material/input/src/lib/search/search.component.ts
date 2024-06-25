import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  Subscription,
  debounceTime,
  filter,
  startWith,
  switchMap,
} from 'rxjs';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { ID } from '@webpackages/types';
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
        [attr.data-testid]="inputLabel"
      />
      <mat-autocomplete
        #auto="matAutocomplete"
        [displayWith]="searchDisplayWith"
        (optionSelected)="__optionSelect($event)"
        [autoSelectActiveOption]="true"
        autoActiveFirstOption
      >
        @for (option of foundOptions(); track option) {
        <mat-option [value]="option">
          {{ searchDisplayWith(option) }}
        </mat-option>
        }
        <mat-option [value]="null"> ----None </mat-option>
      </mat-autocomplete>
      <mat-error>{{ errorMessage$ | async }}</mat-error>
    </mat-form-field>
  `,
})
export class SearchComponent<T extends ID>
  extends AutocompleteComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() resourceName: string;
  @Input() resourceLabelProperty = 'name';

  searchQueryBuilder = inject(getHttpSearchQueryBuilderToken());

  foundOptions = signal<T[]>([]);
  httpClient = inject(HttpClient);

  search$: Observable<T[]>;

  sub: Subscription;

  override ngOnInit(): void {
    this.sub = this.__searchControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(this.inputDebounceTime),
        filter((e) => typeof e == 'string'),
        switchMap((search) => {
          return this.httpClient.get<T[]>(
            this.searchQueryBuilder(this.resourceName, search || '')
          );
        })
      )
      .subscribe((result) => {
        this.foundOptions.update(() => result);
      });
  }
  override ngAfterViewInit(): void {
    setTimeout(() => {
      console.log('Input Control : ', this.inputControl.value);
      console.log('Searcn Control : ', this.__searchControl.value);

      this.autoRef.options;
    }, 3000);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  optionLabel(option: T) {
    return (option as any)[this.resourceLabelProperty] ?? 'Not found';
  }

  searchDisplayWith(option: T): string {
    return (option as any)[this.resourceLabelProperty] || 'None';
  }
}
