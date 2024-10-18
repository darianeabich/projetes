/* eslint-disable @nx/enforce-module-boundaries */
import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LayoutModule } from '@projetes/layout';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  imports: [
    // CommonModule,
    // BrowserModule,
    RouterModule,
    LayoutModule,
    NgIf,
    ButtonModule,
    // NoopAnimationsModule,
  ],
  selector: 'projetes-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  router = inject(Router);
  private primeconfig = inject(PrimeNGConfig);
  showMenu = true;

  ngOnInit(): void {
    this.primeconfig.ripple = true;
  }

  showLogin() {
    this.router.navigate(['welcome/login']);
  }

  logout() {
    // this.authService.logout();
    // this.isAdmin = false;
  }
}
