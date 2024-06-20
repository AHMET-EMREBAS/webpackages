import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
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
import { BehaviorSubject, firstValueFrom } from 'rxjs';

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
  nameControl = new FormControl('');
  upcControl = new FormControl('');
  brandControl = new FormControl('');
  descriptionControl = new FormControl('');

  productFormGroup = new FormGroup({
    name: this.nameControl,
    upc: this.upcControl,
    brand: this.brandControl,
    description: this.descriptionControl,
  });

  constructor(protected readonly httpClient: HttpClient) {}

  async saveProduct() {
    this.productFormGroup.markAllAsTouched();
    try {
      const result = await firstValueFrom(
        this.httpClient.post('api/product', this.productFormGroup.value)
      );
      this.productFormGroup.disable();
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

  errorMessage(control: FormControl) {
    const errors = control.errors;

    if (errors) {
      for (const [key, value] of Object.entries(errors)) {
        // control.setErrors({ error: true });

        return key as string;
      }
    }
    return null; 
  }
}
