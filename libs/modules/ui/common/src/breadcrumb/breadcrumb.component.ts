import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'projetes-breadcrumb',
  standalone: true,
  imports: [CommonModule, BreadcrumbModule],
  template: `<p-breadcrumb [model]="items" [home]="home"></p-breadcrumb>`,
})
export class BreadcrumbComponent implements OnInit {
  @Input() items: MenuItem[] = [];
  home!: MenuItem;

  ngOnInit(): void {
    this.home = { icon: 'pi pi-home', routerLink: '/home' };
  }
}
