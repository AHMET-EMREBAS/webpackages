import { Component, Inject, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';



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
    <table mat-table #table>
      <ng-container matColumnDef="column">
        <th mat-header-cell *matHeaderCellDef>header</th>
        <td mat-cell *matCellDef="let row">{{ row.column }}</td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="['column']"></tr>
      <tr mat-row *matRowDef="let row; columns: ['column']"></tr>
    </table>
  `,
  styles: ``,
})
export class TableComponent implements OnInit {
  httpClient = inject(HttpClient);
  @Input() pluralResourceName: string;
  @Input() showCheckbox = true;

  ngOnInit(): void {}
}
