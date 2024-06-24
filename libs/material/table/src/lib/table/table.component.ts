import {
  Component,
  Inject,
  Input,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { TableColumnOptions } from './table-column-option';
import {
  getTableIdColumnsToken,
  getTimestampColumOptionsToken,
} from './providers';
@Component({
  selector: 'wp-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
  ],
  template: `
    {{ tableIdColumns | json }} <br />
    {{ tableTimestampColumns | json }} <br />
    {{ tableColumns | json }} <br />
    <table mat-table [dataSource]="data" #table>
      @for(item of tableIdColumns; track item ){
      <ng-container [matColumnDef]="item.name">
        <th class="w-4" mat-header-cell *matHeaderCellDef>
          {{ item.label }}
        </th>
        <td class="w-4" mat-cell *matCellDef="let row; let i = index">
          {{ i + 1 }}
        </td>
      </ng-container>
      }

      <!-- Table Columns -->
      @for(item of tableColumns; track item){
      <ng-container [matColumnDef]="item.name">
        <th mat-header-cell *matHeaderCellDef>{{ item.label }}</th>
        <td mat-cell *matCellDef="let row">{{ row[item.name] }}</td>
      </ng-container>
      }

      <!-- Timestamp columns -->
      @for(item of tableTimestampColumns; track item){
      <ng-container [matColumnDef]="item.name">
        <th mat-header-cell *matHeaderCellDef>{{ item.label }}</th>
        <td mat-cell *matCellDef="let row">{{ row[item.name] }}</td>
      </ng-container>
      }

      <tr mat-header-row *matHeaderRowDef="columns()"></tr>
      <tr mat-row *matRowDef="let row; columns: columns()"></tr>
    </table>
  `,
  styles: ``,
})
export class TableComponent implements OnInit {
  httpClient = inject(HttpClient);
  @Input() data: any[];
  @Input() tableColumns: TableColumnOptions;
  @Input() pluralResourceName: string;
  @Input() showCheckbox = true;

  columns = signal<string[] | null>(null);
  displayedColumns = signal<string[] | null>(null);

  idColumns = signal<string[]>([]);
  timestampColumns = signal<string[]>([]);

  constructor(
    @Inject(getTableIdColumnsToken())
    public readonly tableIdColumns: TableColumnOptions,
    @Inject(getTimestampColumOptionsToken())
    public readonly tableTimestampColumns: TableColumnOptions
  ) {}

  ngOnInit(): void {
    this.idColumns.update(() => this.tableIdColumns.map((e) => e.name));

    this.timestampColumns.update(() =>
      this.tableTimestampColumns.map((e) => e.name)
    );

    this.columns.update(() => [
      ...this.idColumns(),
      ...this.tableColumns.map((e) => e.name),
      ...this.timestampColumns(),
    ]);
    this.displayedColumns.update(() => [
      ...this.idColumns(),
      ...this.tableColumns.map((e) => e.name),
      ...this.timestampColumns(),
    ]);
  }
}
