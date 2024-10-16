import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BreadcrumbComponent } from '@projetes/ui-common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'projetes-home',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
