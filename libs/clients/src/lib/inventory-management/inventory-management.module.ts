import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InventoryManagementRoutes } from './inventory-management.routes';


@NgModule({
  imports: [
    CommonModule,
  
    RouterModule.forChild(InventoryManagementRoutes),
  ],
})
export class InventoryManagementModule {}
