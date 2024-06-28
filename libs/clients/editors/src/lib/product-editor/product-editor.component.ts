import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ### Create Product 
 * - Price
 * - Quantity
 * - Serial Number
 */
@Component({
  selector: 'wp-product-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./product-editor.component.html`,
})
export class ProductEditorComponent {}
