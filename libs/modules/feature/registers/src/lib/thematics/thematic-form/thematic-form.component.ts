import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'projetes-thematic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule],
  templateUrl: './thematic-form.component.html',
  styleUrl: './thematic-form.component.scss',
})
export class ThematicFormComponent implements OnInit {
  thematicForm!: FormGroup;
  edition = false;

  private ref = inject(DynamicDialogRef);
  private config = inject(DynamicDialogConfig);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.edition = !!this.config.data?.thematic;

    this.initForm();

    if (this.edition) {
      this.patchForm();
    }
  }

  initForm() {
    this.thematicForm = this.fb.group({
      titulo: ['', Validators.required],
    });
  }

  patchForm() {
    // todo: carregar dados p/ editar o formulário
  }

  closeModal() {
    this.ref.close();
  }

  save() {
    // todo: novo ou edição
  }
}
