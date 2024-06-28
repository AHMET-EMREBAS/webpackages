import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  Subscription,
  debounceTime,
  filter,
  repeat,
  startWith,
  switchMap,
} from 'rxjs';
import { InputComponent, InputModules } from '../input';
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { getHttpSearchQueryBuilderToken } from '@webpackages/material/core';
import { FormControl } from '@angular/forms';

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
        [matAutocomplete]="searchAutoComplete"
        [multiple]="inputMultiple"
        [attr.data-testid]="inputLabel"
        [tabindex]="tabIndex"
      />
      <mat-autocomplete
        #searchAutoComplete="matAutocomplete"
        [displayWith]="searchDisplayWith(resourceLabelProperty)"
        (optionSelected)="__optionSelect($event)"
        [autoActiveFirstOption]="true"
        [autoSelectActiveOption]="true"
      >
        @for (option of foundOptions(); track option) {
        <mat-option [value]="option">
          {{ option[resourceLabelProperty] }}
        </mat-option>
        }
        <mat-option [value]="noneValue()"> --- None --- </mat-option>
      </mat-autocomplete>

      <mat-error>{{ errorMessage$ | async }}</mat-error>
    </mat-form-field>
  `,
})
export class SearchComponent
  extends InputComponent
  implements OnInit, OnDestroy
{
  @ViewChild('searchAutoComplete') searchAutoComplete: MatAutocomplete;
  @Input() resourceName: string;
  @Input() resourceLabelProperty: string;

  __searchControl = new FormControl<string | null>(null);
  searchQueryBuilder = inject(getHttpSearchQueryBuilderToken());

  foundOptions = signal<any[]>([]);
  httpClient = inject(HttpClient);
  search$: Observable<any[]>;
  sub: Subscription;

  override ngOnInit(): void {
    super.ngOnInit();
    this.sub = this.__searchControl.valueChanges
      .pipe(
        repeat(2),
        startWith(''),
        debounceTime(this.inputDebounceTime),
        filter((e) => typeof e == 'string'),
        switchMap((search) => {
          return this.httpClient.get<any[]>(
            this.searchQueryBuilder(this.resourceName, search || '')
          );
        })
      )
      .subscribe((result) => {
        this.foundOptions.update(() => result);
      });


    this.__searchControl.setValue(this.inputControl.value);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  searchDisplayWith(propertyName: string) {
    return (option: any) => {
      if (option)
        if (typeof option == 'string') {
          return option;
        } else if (typeof option == 'object') {
          return option[propertyName];
        }
      return '';
    };
  }

  __optionSelect(event: MatAutocompleteSelectedEvent) {
    console.log('It it working ? : ', event.option.value);
    this.inputControl.setValue(event.option.value);
  }

  noneValue() {
    return {
      [this.resourceLabelProperty]: '--- None ---',
    };
  }
}
