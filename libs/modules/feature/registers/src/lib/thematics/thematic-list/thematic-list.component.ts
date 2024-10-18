/* eslint-disable @nx/enforce-module-boundaries */
import { CommonModule } from '@angular/common';
import { Component, ErrorHandler, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ThematicListI } from '@projetes/shared-interfaces';
import { ThematicService } from '@projetes/shared-service';
import { BreadcrumbComponent } from '@projetes/ui-common';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'projetes-thematic-list',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    ToolbarModule,
    ButtonModule,
    TableModule,
    FontAwesomeModule,
  ],
  templateUrl: './thematic-list.component.html',
  styleUrl: './thematic-list.component.scss',
  providers: [ConfirmationService, DialogService],
})
export class ThematicListComponent implements OnInit {
  editIcon = faEdit;
  trashIcon = faTrashAlt;
  breadcrumbs: MenuItem[] = [];
  modalCadastro = false;
  thematicList: ThematicListI[] = [];
  thematicSelected: ThematicListI | null = null;

  private tematicaService = inject(ThematicService);
  private confirmation = inject(ConfirmationService);
  private handleError = inject(ErrorHandler);
  private dialogService = inject(DialogService);

  ngOnInit(): void {
    this.breadcrumbs = [{ label: 'Cadastros' }, { label: 'Temáticas' }];

    this.getThematics(0, 10);
  }

  getThematics(offset: number, limit: number) {
    //TODO: vincular o serviço
  }

  new() {
    //TODO: abrir modal
    // const modal = this.dialogService.open({
    // })
  }

  details(thematic: ThematicListI) {
    // TODO: abrir modal
  }

  remove(thematic: ThematicListI) {
    // TODO: abrir modal de exclusão
  }
}
