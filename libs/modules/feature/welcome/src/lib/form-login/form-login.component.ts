import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'projetes-form-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PasswordModule, ButtonModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss',
})
export class FormLoginComponent {
  private fb = inject(FormBuilder);
  // TODO: fazer autenticação do login
  // private authService = inject(AuthService);

  loginForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    senha: [
      '',
      Validators.compose([Validators.required, Validators.minLength(6)]),
    ],
  });

  login() {
    console.log(this.loginForm.value);
  }
}
