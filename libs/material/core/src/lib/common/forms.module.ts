import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule as FModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';

const modules = [
  CommonModule,
  ReactiveFormsModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  MatDatepickerModule,
  FModule,
];
@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class FormsModule {}
