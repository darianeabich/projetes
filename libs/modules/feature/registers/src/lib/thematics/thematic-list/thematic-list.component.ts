import { ThematicFormComponent } from './../thematic-form/thematic-form.component';
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

  private thematicService = inject(ThematicService);
  private confirmation = inject(ConfirmationService);
  private handleError = inject(ErrorHandler);
  private dialogService = inject(DialogService);

  ngOnInit(): void {
    this.breadcrumbs = [{ label: 'Cadastros' }, { label: 'Temáticas' }];

    this.getThematics(0, 10);
  }

  /**
   * @description Buscar as temáticas
   * @param {number} offset
   * @param {number} limit
   */
  getThematics(offset: number, limit: number) {
    //TODO: vincular o serviço
  }

  /**
   * @description Abrir o modal de cadastro
   */
  new() {
    //TODO: abrir modal
    const modal = this.dialogService.open(ThematicFormComponent, {
      header: 'Cadastrar tema',
      width: '60%',
      data: {
        thematic: null,
      },
    });

    modal.onClose.subscribe((result) => {
      if (result) {
        this.getThematics(0, 10);
      }
    });
  }

  /**
   * @description Abrir o modal para os detalhes do tema selecionado
   * @param thematic
   */
  details(thematic: ThematicListI) {
    const modal = this.dialogService.open(ThematicFormComponent, {
      header: 'Detalhes do tema',
      width: '60%',
      data: {
        thematic: this.thematicSelected,
      },
    });

    modal.onClose.subscribe((result) => {
      if (result) {
        this.getThematics(0, 10);
      }
    });
  }

  /**
   * @description Remover o tema selecionado
   * @param thematic
   */
  remove(thematic: ThematicListI) {
    // TODO: abrir modal de exclusão
  }
}
