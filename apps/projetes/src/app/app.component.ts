import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { LayoutModule } from '@projetes/layout';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    NgIf,
    ButtonModule,
    RouterOutlet,
  ],
  selector: 'projetes-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  router = inject(Router);
  private primengConfig = inject(PrimeNGConfig);
  showMenu = true;

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  showLogin() {
    this.router.navigate(['boasvindas/login']);
  }

  logout() {
    // this.authService.logout();
    // this.isAdmin = false;
  }
}
