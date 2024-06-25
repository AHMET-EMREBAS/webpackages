import { Component, Inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ViewportDirective } from '../directives';
import { Dir } from '@angular/cdk/bidi';
import { getSubModuleNavListItemsToken } from '@webpackages/material/core';
import { NavListItems } from '@webpackages/types';

@Component({
  selector: 'wp-module-layout',
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
  providers: [Dir],
  templateUrl: './module-layout.component.html',
  styleUrls: ['./module-layout.component.css'],
})
export class ModuleLayoutComponent {
  activeNavItem = signal<string | null>(null);

  isRTL = signal(this.dir.dir === 'rtl');

  constructor(
    @Inject(getSubModuleNavListItemsToken()) public navlistItems: NavListItems,
    public readonly dir: Dir
  ) {}

  activate(name: string) {
    this.activeNavItem.update(() => name);
  }

  isActiveNavItem(name: string) {
    return this.activeNavItem() === name;
  }
}
