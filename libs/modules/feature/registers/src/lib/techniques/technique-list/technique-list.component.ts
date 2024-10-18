/* eslint-disable @nx/enforce-module-boundaries */
import { CommonModule } from '@angular/common';
import { Component, ErrorHandler, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { TechniqueI, TechniqueListI } from '@projetes/shared-interfaces';
import { TechniqueService } from '@projetes/shared-service';
import { BreadcrumbComponent } from '@projetes/ui-common';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'projetes-technique-list',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    ToolbarModule,
    TableModule,
    ButtonModule,
    FontAwesomeModule,
  ],
  templateUrl: './technique-list.component.html',
  styleUrl: './technique-list.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class TechniqueListComponent implements OnInit {
  editIcon = faEdit;
  trashIcon = faTrashAlt;

  breadcrumbs: MenuItem[] = [];
  techniques: TechniqueI[] = [];
  techniqueList: TechniqueListI[] = [];
  techniqueSelected!: TechniqueListI;
  totalRecords = 0;
  loadingTecnicas = false;

  first = 0;
  rows = 10;

  private techniqueService = inject(TechniqueService);
  private router = inject(Router);
  private messageService = inject(MessageService);
  private handleError = inject(ErrorHandler);
  private confirmation = inject(ConfirmationService);

  ngOnInit(): void {
    this.breadcrumbs = [{ label: 'Cadastros' }, { label: 'Técnicas' }];

    this.getTechniques();
  }

  getTechniques() {
    this.loadingTecnicas = true;
    // TODO: BUSCAR AS TECNICAS
  }

  goToNewTechnique() {
    this.router.navigate(['/register/technique/form']);
  }

  remove(technique: TechniqueListI) {
    // TODO: REMOVER TECNICA
  }

  details(technique: TechniqueListI) {
    // TODO: DETALHES DA TECNICA
  }

  next() {
    // TODO: BUSCAR MAIS TECNICAS
  }

  preview() {
    // TODO: BUSCAR MENOS TECNICAS
  }
}
