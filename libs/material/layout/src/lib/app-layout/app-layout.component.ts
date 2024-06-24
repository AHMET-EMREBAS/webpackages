import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavListItems } from '../common';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ViewportDirective } from '../directives';

@Component({
  selector: 'wp-app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ViewportDirective,
  ],
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css'],
})
export class AppLayoutComponent {
  @Input() navlistItems: NavListItems;
}
