/* eslint-disable @nx/enforce-module-boundaries */
import { CommonModule } from '@angular/common';
import { Component, ErrorHandler, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StepDropdownI } from '@projetes/shared-interfaces';
import { TechniqueService } from '@projetes/shared-service';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'projetes-technique-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technique-form.component.html',
  styleUrl: './technique-form.component.scss',
})
export class TechniqueFormComponent implements OnInit {
  breadcrumbs: MenuItem[] = [];
  challengeChecked = false;
  activeStatus = true;
  autoResize = true;
  stepList: StepDropdownI[] = [];
  techniqueForm!: FormGroup;
  edition = false;

  idTechnique = 0;

  private fb = inject(FormBuilder);
  private techniqueService = inject(TechniqueService);
  private messageService = inject(MessageService);
  private handleError = inject(ErrorHandler);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    this.breadcrumbs = [
      { label: 'Cadastros' },
      { label: 'Técnicas', routerLink: ['/cadastros/tecnicas'] },
      { label: 'Nova Técnica' },
    ];

    this.idTechnique = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.idTechnique);

    this.initTechnique();
  }

  initTechnique() {
    this.challengeChecked = false;
    this.activeStatus = true;
    this.autoResize = true;

    this.techniqueForm = this.fb.group({
      tipo: [''],
      status: [true, Validators.required],
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      quando_usar: ['', Validators.required],
      como_usar: ['', Validators.required],
      material: ['', Validators.required],
      tempo: ['', Validators.required],
    });
  }

  save() {
    console.log(this.techniqueForm.value);
  }
}
