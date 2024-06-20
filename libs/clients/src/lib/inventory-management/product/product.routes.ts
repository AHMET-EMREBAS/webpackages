import { Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

export const ProductRoutes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      { path: '', component: ViewProductComponent },
      { path: 'create', component: CreateProductComponent },
      { path: 'update/:id', component: UpdateProductComponent },
      { path: 'delete/:id', component: DeleteProductComponent },
    ],
  },
];
