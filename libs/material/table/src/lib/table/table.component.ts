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
import {
  getTableRowRouteValueHandlerToken,
  getTableIdColumnsToken,
  getTimestampColumOptionsToken,
  TableRowRouteValueHandler,
  getContextEditRouteValueToken,
  getContextDeleteRouteValueToken,
} from '@webpackages/material/core';

import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { CdkMenu, CdkMenuItem, CdkContextMenuTrigger } from '@angular/cdk/menu';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, debounceTime, fromEvent, map } from 'rxjs';
import { LiveAnnouncer, A11yModule } from '@angular/cdk/a11y';
import { getEntityCollectionServiceToken } from '@webpackages/material/core';
import { EntityCollectionService, MergeStrategy } from '@ngrx/data';
import { TableColumnOption, TableColumnOptions } from '@webpackages/types';
@Component({
  selector: 'wp-table',
  standalone: true,
  imports: [
    CommonModule,
    A11yModule,
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
  @ViewChild(MatSort) sort: MatSort;

  filteredData$: Observable<any[]> = this.service.filteredEntities$;

  searchControl = new FormControl('', []);
  contextRowValue = signal<any>(null);

  /** @deprecated */ @Input() tableItemsSize: number;
  /** @deprecated */ @Input() pageSize: number;
  /** @deprecated */ @Input() tableData: any[];
  /** @deprecated */ @Input() tableDataSource: MatTableDataSource<any>;

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
    public readonly deleteRouteHandler: TableRowRouteValueHandler,
    private liveAnnouncer: LiveAnnouncer,
    @Inject(getEntityCollectionServiceToken())
    private readonly service: EntityCollectionService<any>
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

    this.loadData();

    if (this.tableData) {
      this.tableDataSource = new MatTableDataSource(this.tableData);
      this.tableDataSource.paginator = this.paginator;
      this.tableDataSource.sort = this.sort;
    }
  }

  emitSortChange(event: Sort) {
    this.sortChangeEvent.emit(event);
    this.liveAnnouncer.announce('Sorting table data', 'polite');
  }

  emitPageChange(event: PageEvent) {
    this.pageChangeEvent.emit(event);
    this.liveAnnouncer.announce('Paging table data', 'polite');
  }

  contextMenuOpened(row: any) {
    this.contextRowValue.update(() => row);
    this.liveAnnouncer.announce('Context menu opened', 'polite');
  }

  dynamicClass(columnOption: TableColumnOption, value: any) {
    return columnOption.class ? columnOption.class(value) : '';
  }

  loadData() {
    const { pageIndex, pageSize } = this.paginator;
    this.service.getWithQuery(
      {
        take: pageSize,
        skip: pageSize * pageIndex,
        search: this.searchValue,
      },
      { mergeStrategy: MergeStrategy.OverwriteChanges, isOptimistic: false }
    );
  }
}
