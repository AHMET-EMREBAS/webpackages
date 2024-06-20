import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ValidatorBuilder } from '@webpackages/clients-common';
@Component({
  selector: 'lib-create-product',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatAutocompleteModule,
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css',
})
export class CreateProductComponent {
  nameControl = new FormControl(
    '',
    new ValidatorBuilder('name', true).minLength(3).maxLength(100).build()
  );
  upcControl = new FormControl(
    '',
    new ValidatorBuilder('upc', true).minLength(8).maxLength(13).build()
  );
  brandControl = new FormControl(
    '',
    new ValidatorBuilder('brand').minLength(3).maxLength(100).build()
  );
  descriptionControl = new FormControl(
    '',
    new ValidatorBuilder('description').minLength(3).maxLength(1000).build()
  );

  productFormGroup = new FormGroup({
    name: this.nameControl,
    upc: this.upcControl,
    brand: this.brandControl,
    description: this.descriptionControl,
  });

  post$ = this.httpClient.post('api/product', this.productFormGroup.value);

  constructor(protected readonly httpClient: HttpClient) {}

  async post() {
    try {
      this.productFormGroup.markAllAsTouched();
      const result = await firstValueFrom(this.post$);
    } catch (error: any) {
      const errorList = error.error.errors as any[];

      if (errorList.length > 0) {
        const errors = errorList.reduce((p, c) => ({ ...p, ...c }));

        for (const [key, value] of Object.entries(errors)) {
          if (value) {
            const c = (value as any)['constraints'];
            this.productFormGroup.get(key)?.setErrors(c);
          }
        }
      }
    }
  }

  error(control: FormControl) {
    const errors = control.errors;
    if (errors) {
      for (const [, value] of Object.entries(errors)) {
        return value;
      }
    }
    return null;
  }

  clear() {
    this.productFormGroup.reset();
  }
}
