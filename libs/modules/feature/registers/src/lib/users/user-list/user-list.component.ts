/* eslint-disable @nx/enforce-module-boundaries */
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { UserListI } from '@projetes/interfaces';
import { UsersService } from '@projetes/shared-service';
import { BreadcrumbComponent } from '@projetes/ui-common';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { map } from 'rxjs';

@Component({
  selector: 'projetes-user-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    BreadcrumbComponent,
    FontAwesomeModule,
    ToolbarModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  editIcon = faEdit;
  trashIcon = faTrashAlt;
  breadcrumbs: MenuItem[] = [];
  usersList: UserListI[] = [];

  private userService = inject(UsersService);
  private router = inject(Router);

  ngOnInit(): void {
    this.breadcrumbs = [{ label: 'Cadastros' }, { label: 'Usuários' }];
    this.getUsers(0, 10);
  }

  /**
   * @description Buscar os usuários
   * @param {number} offset
   * @param {number} limit
   */
  getUsers(offset: number, limit: number) {
    this.userService
      .getUsers(offset, limit)
      .pipe(
        map((response: any) => {
          console.log(response);
          this.usersList = response;
        })
      )
      .subscribe();
  }

  /**
   * @description Navegar para os detalhes do usuário
   * @param {UserListI} user Usuário selecionado
   */
  details(user: UserListI) {
    this.router.navigate(['form', user.id]);
  }

  remove(user: UserListI) {
    // TODO: REMOVE USER
  }
}
