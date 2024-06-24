import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { TableColumnOption, TableColumnOptions } from './table-column-option';
import {
  getTableRowRouteValueHandlerToken,
  getTableIdColumnsToken,
  getTimestampColumOptionsToken,
  TableRowRouteValueHandler,
  getContextEditRouteValueToken,
  getContextDeleteRouteValueToken,
} from './table.provider';

import { MatSortModule, Sort } from '@angular/material/sort';
import { CdkMenu, CdkMenuItem, CdkContextMenuTrigger } from '@angular/cdk/menu';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BehaviorSubject,
  Observable,
  debounceTime,
  fromEvent,
  map,
} from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
@Component({
  selector: 'wp-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatListModule,
    CdkMenu,
    CdkMenuItem,
    CdkContextMenuTrigger,
    RouterModule,
    MatPaginatorModule,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;
  @ViewChild('paginator') paginator: MatPaginator;

  httpClient = inject(HttpClient);
  searchControl = new FormControl('', []);
  contextRowValue = signal<any>(null);

  @Input() tableItemsSize: number;
  @Input() pageSize: number;
  @Input() tableData: any[];
  @Input() tableDataSource: MatTableDataSource<any>;
  @Input() tableColumns: TableColumnOptions;
  @Input() pluralResourceName: string;
  @Input() showCheckbox = true;
  @Input() showTimestamps = true;
  @Output() sortChangeEvent = new EventEmitter<Sort>();
  @Output() pageChangeEvent = new EventEmitter<PageEvent>();
  @Output() searchEvent = new EventEmitter<string>();

  searchValue = '';
  search$: Observable<string>;

  columns = signal<string[] | null>(null);
  displayedColumns = signal<string[] | null>(null);
  idColumns = signal<string[]>([]);
  timestampColumns = signal<string[]>([]);

  constructor(
    @Inject(getTableIdColumnsToken())
    public readonly tableIdColumns: TableColumnOptions,
    @Inject(getTimestampColumOptionsToken())
    public readonly tableTimestampColumns: TableColumnOptions,
    @Inject(getTableRowRouteValueHandlerToken())
    public readonly rowRouteHandler: TableRowRouteValueHandler,
    @Inject(getContextEditRouteValueToken())
    public readonly editRouteHandler: TableRowRouteValueHandler,
    @Inject(getContextDeleteRouteValueToken())
    public readonly deleteRouteHandler: TableRowRouteValueHandler
  ) {}

  ngOnInit(): void {
    this.idColumns.update(() => this.tableIdColumns.map((e) => e.name));

    this.timestampColumns.update(() =>
      this.showTimestamps ? this.tableTimestampColumns.map((e) => e.name) : []
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

  ngAfterViewInit(): void {
    this.search$ = fromEvent(this.searchInput.nativeElement, 'input').pipe(
      debounceTime(400),
      map(() => {
        this.tableDataSource.filter = this.searchValue;
        this.searchEvent.emit(this.searchValue);
        return this.searchValue;
      })
    );

    if (this.tableData) {
      this.tableDataSource = new MatTableDataSource(this.tableData);
      this.tableDataSource.paginator = this.paginator;
    }
  }

  emitSortChange(event: Sort) {
    this.sortChangeEvent.emit(event);
  }

  emitPageChange(event: PageEvent) {
    this.pageChangeEvent.emit(event);
  }

  contextMenuOpened(row: any) {
    this.contextRowValue.update(() => row);
  }

  dynamicClass(columnOption: TableColumnOption, value: any) {
    return columnOption.class ? columnOption.class(value) : '';
  }
}
