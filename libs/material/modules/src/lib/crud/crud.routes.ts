import { Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { CreateComponent } from './create/create.component';
import { EditorComponent } from './editor/editor.component';
import { DeleteComponent } from './delete/delete.component';

export const CrudRoutes: Routes = [
  {
    path: '',
    loadChildren() {
      return TableComponent;
    },
  },
  {
    path: 'create',
    loadChildren() {
      return CreateComponent;
    },
  },
  {
    path: 'editor/:id',
    loadChildren() {
      return EditorComponent;
    },
  },
  {
    path: 'delete/:id',
    loadChildren() {
      return DeleteComponent;
    },
  },
];
