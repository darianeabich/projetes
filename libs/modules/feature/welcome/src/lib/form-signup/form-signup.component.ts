import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'projetes-form-signup',
  standalone: true,
  imports: [CommonModule, TabViewModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './form-signup.component.html',
  styleUrl: './form-signup.component.scss',
})
export class FormSignupComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  participantForm = this.fb.group({
    nome: ['', Validators.required],
    cod_institucional: [
      '',
      Validators.compose([Validators.required, Validators.minLength(10)]),
    ],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    senha: [
      '',
      Validators.compose([Validators.required, Validators.minLength(8)]),
    ],
    // passwordConfirm: ['', Validators.required, Validators.minLength(8)],
    status: [true],
    perfil: ['PARTICIPANTE'],
  });

  facilitatorForm = this.fb.group({
    nome: ['', Validators.required],
    cod_institucional: [
      '',
      Validators.compose([Validators.required, Validators.minLength(10)]),
    ],
    email: ['', Validators.compose([Validators.required, Validators.email])],
  });

  signup() {
    console.log(this.participantForm.value);
  }

  apply() {
    console.log(this.facilitatorForm.value);
  }

  redirect() {
    this.router.navigate(['welcome/login']);
  }
}
