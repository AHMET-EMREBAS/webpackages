/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  OnInit,
  Optional,
  Output,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
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
  getTableColumnOptionsToken,
  getResourceNameToken,
  getHttpCountQueryBuilderToken,
  HttpCountQueryBuilder,
} from '@webpackages/material/core';

import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { CdkMenu, CdkMenuItem, CdkContextMenuTrigger } from '@angular/cdk/menu';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, debounceTime, map, merge, of, startWith } from 'rxjs';
import { LiveAnnouncer, A11yModule } from '@angular/cdk/a11y';
import { getEntityCollectionServiceToken } from '@webpackages/material/core';
import { EntityCollectionService, MergeStrategy } from '@ngrx/data';
import { CountResponse, PropertyOptions } from '@webpackages/types';
import { HttpClient } from '@angular/common/http';

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
export class TableComponent<T = any> implements OnInit, AfterViewInit {
  httpClient = inject(HttpClient);
  @ViewChild('searchInput') readonly searchInput: ElementRef<HTMLInputElement>;
  @ViewChild('paginator') readonly paginator: MatPaginator;
  @ViewChild(MatSort) readonly sort: MatSort;

  readonly filteredData$: Observable<T[]> = this.service.filteredEntities$;

  readonly searchControl = new FormControl<string>('');
  readonly contextRowValue = signal<any>(null);

  length$ = this.httpClient
    .get<CountResponse>(this.httpCountQueryBuilder(this.resourceName))
    .pipe(map((d) => d.count));

  withDeleted = false;
  showTimestamps = true;

  @Output() readonly sortChangeEvent = new EventEmitter<Sort>();
  @Output() readonly pageChangeEvent = new EventEmitter<PageEvent>();
  @Output() readonly searchEvent = new EventEmitter<string>();

  readonly columns = signal<string[] | null>(null);
  readonly displayedColumns = signal<string[] | null>(null);
  readonly idColumns = signal<string[]>([]);
  readonly timestampColumns = signal<string[]>([]);

  constructor(
    @Inject(getTableIdColumnsToken())
    public readonly tableIdColumns: PropertyOptions[],
    @Inject(getTimestampColumOptionsToken())
    public readonly tableTimestampColumns: PropertyOptions[],
    @Inject(getTableRowRouteValueHandlerToken())
    public readonly rowRouteHandler: TableRowRouteValueHandler,
    @Inject(getContextEditRouteValueToken())
    public readonly editRouteHandler: TableRowRouteValueHandler,
    @Inject(getContextDeleteRouteValueToken())
    public readonly deleteRouteHandler: TableRowRouteValueHandler,
    private liveAnnouncer: LiveAnnouncer,
    @Inject(getEntityCollectionServiceToken())
    private readonly service: EntityCollectionService<any>,
    @Inject(getTableColumnOptionsToken())
    public readonly tableColumnOptions: PropertyOptions[],
    @Inject(getResourceNameToken())
    public readonly resourceName: string,
    @Inject(getHttpCountQueryBuilderToken())
    public readonly httpCountQueryBuilder: HttpCountQueryBuilder
  ) {}

  ngOnInit(): void {
    this.idColumns.update(() => this.tableIdColumns.map((e) => e.name));

    this.timestampColumns.update(() =>
      this.showTimestamps ? this.tableTimestampColumns.map((e) => e.name) : []
    );

    this.columns.update(() => [
      ...this.idColumns(),
      ...this.tableColumnOptions.map((e) => e.name),
      ...this.timestampColumns(),
    ]);

    this.displayedColumns.update(() => [
      ...this.idColumns(),
      ...this.tableColumnOptions.map((e) => e.name),
      ...this.timestampColumns(),
    ]);
  }

  ngAfterViewInit(): void {
    merge(
      this.searchControl.valueChanges.pipe(debounceTime(600)),
      this.paginator.page,
      this.sort.sortChange
    )
      .pipe(debounceTime(400), startWith(''))
      .subscribe(() => {
        this.loadData();
      });
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

  columnClass(columnOption: PropertyOptions, value: any) {
    const conditionalClass = columnOption.tableColumnConditionalClass
      ? columnOption.tableColumnConditionalClass(value)
      : '';
    const staticClass = columnOption.tableColumnClass ?? '';

    return '!' + conditionalClass + ' ' + staticClass;
  }

  loadData() {
    const { pageIndex, pageSize } = this.paginator;
    const { direction: orderDir, active: orderBy } = this.sort;
    this.service.clearCache();
    this.service.getWithQuery(
      {
        take: pageSize,
        skip: pageSize * pageIndex,
        search: this.searchControl.value || '',
        orderDir: orderDir || 'asc',
        orderBy: orderBy || 'eid',
        withDeleted: this.withDeleted,
      },
      { mergeStrategy: MergeStrategy.OverwriteChanges, isOptimistic: false }
    );
  }
}
