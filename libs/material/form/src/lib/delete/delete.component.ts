import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { getEntityCollectionServiceToken } from '@webpackages/material/core';
import { EntityCollectionService } from '@ngrx/data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'wp-delete',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <div class="p-4 flex flex-col gap-4 text-center">
      <p>You are about to deleting the item! Are you sure?</p>

      <table>
        @for(item of properties(itemToDelete$ | async); track item){

        <tr>
          <td>
            <strong>{{ item.key }}</strong>
          </td>
          <td>{{ item.value }}</td>
        </tr>
        }
      </table>

      <button mat-raised-button color="warn" (click)="deleteItem()">
        Delete
      </button>
    </div>
  `,
  styles: ``,
})
export class DeleteComponent {
  entityId = this.activatedRoute.snapshot.paramMap.get('id');
  itemToDelete$ = this.service.getByKey(this.entityId);

  constructor(
    @Inject(getEntityCollectionServiceToken())
    protected readonly service: EntityCollectionService<any>,
    protected readonly activatedRoute: ActivatedRoute,
    protected readonly router: Router
  ) {}

  async deleteItem() {
    this.service.delete(this.entityId);
    this.router.navigate(['../../table'], { relativeTo: this.activatedRoute });
  }

  properties(data: any) {
    return Object.entries(data).map(([key, value]) => {
      return { key, value };
    });
  }
}
