/* eslint-disable @nx/enforce-module-boundaries */
import { CommonModule } from '@angular/common';
import { Component, ErrorHandler, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilTypeEnum } from '@projetes/shared-enums';
import { UsersService } from '@projetes/shared-service';
import { BreadcrumbComponent } from '@projetes/ui-common';
import { MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'projetes-user-form',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    ReactiveFormsModule,
    DropdownModule,
    InputSwitchModule,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
  providers: [MessageService],
})
export class UserFormComponent implements OnInit {
  breadcrumbs: MenuItem[] = [];
  activeStatus = true;
  autoResize = true;
  edition = false;
  userForm!: FormGroup;
  idUser = 0;

  userType: any[] = [
    { label: 'Administrador', value: PerfilTypeEnum.ADMINISTRADOR },
    { label: 'Facilitador', value: PerfilTypeEnum.FACILITADOR },
    { label: 'Participante', value: PerfilTypeEnum.PARTICIPANTE },
  ];

  private fb = inject(FormBuilder);
  private userService = inject(UsersService);
  private messageService = inject(MessageService);
  private handleError = inject(ErrorHandler);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    this.breadcrumbs = [
      { label: 'Cadastros' },
      { label: 'Usuários', routerLink: ['/register/users'] },
      { label: 'Novo Usuário' },
    ];

    this.idUser = Number(this.route.snapshot.paramMap.get('id'));
    this.initNewUser();
  }

  /**
   * @description Inicializar o formulário de cadastro de um novo usuário ou carregar os dados para a edição de um existente.
   */
  initNewUser() {
    this.activeStatus = true;
    this.autoResize = true;

    this.userForm = this.fb.group({
      perfil: [''],
      status: [true, Validators.required],
      nome: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: [
        '',
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
      cod_institucional: [
        '',
        Validators.compose([Validators.required, Validators.minLength(10)]),
      ],
      // email: ['', Validators.required, Validators.email],
      // cpf: ['', [Validators.required, Validators.pattern('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}')]],
      // cod_institucional: ['', [Validators.required, Validators.minLength(10)]],
      // senha: ['', [Validators.required, Validators.minLength(8)]],
      // confirmarSenha: ['', Validators.required, Validators.minLength(8)],
    });

    if (this.idUser !== 0 && this.idUser !== null) {
      console.log(this.idUser);
      // this.userService
      //   .getById(this.idUser)
      //   .pipe(first())
      //   .subscribe((user) => {
      //     console.log(user);
      //     this.userForm.patchValue(user);
      //   });
    }
  }

  /**
   * @description Salvar um usuário, seja um novo cadastro ou a edição de um já existente.
   */
  save() {
    if (this.idUser === 0 || this.idUser === null) {
      this.userService
        .create(this.userForm.value)
        .pipe(
          map((etapa): void => {
            console.log(etapa);
            this.router.navigate(['/cadastros/usuarios']);
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Usuário cadastrado com sucesso!',
            });
          }),
          catchError((error) => of(this.handleError.handleError(error)))
        )
        .subscribe();
    } else {
      this.userService
        .update(this.idUser, this.userForm.value)
        .pipe(
          map((etapa): void => {
            console.log(etapa);
            this.edition = false;
            this.router.navigate(['/cadastros/usuarios']);
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Usuário editado com sucesso!',
              life: 4000,
            });
          }),
          catchError((error) => of(this.handleError.handleError(error)))
        )
        .subscribe();
    }
  }
}
