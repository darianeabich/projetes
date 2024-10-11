import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LayoutModule } from '@projetes/layout';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutModule, NgIf, ButtonModule],
  selector: 'projetes-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  router = inject(Router);
  showMenu = true;

  showLogin() {
    this.router.navigate(['boasvindas/login']);
  }

  logout() {
    // this.authService.logout();
    // this.isAdmin = false;
  }
}
