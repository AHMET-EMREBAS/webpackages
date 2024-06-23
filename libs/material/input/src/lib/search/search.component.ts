import { Component, inject } from '@angular/core';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { HttpClient } from '@angular/common/http';
import { InputComponent, InputModules } from '../input';

@Component({
  selector: 'wp-search',
  standalone: true,
  imports: [InputModules],
  template: `
    <mat-form-field class="w-full">
      <mat-label>{{ inputLabel }}</mat-label>
      <input matInput type="text" />
    </mat-form-field>
  `,
})
export class SearchComponent extends InputComponent {
  httpClient = inject(HttpClient);
}
