import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MegaMenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'projetes-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  @Input() isAdmin!: boolean;
  @Output() logout = new EventEmitter<void>();

  options: MegaMenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      // routerLink: ['/home'],
    },
    {
      label: 'Projetos',
      icon: PrimeIcons.LIST,
      // routerLink: ['/projetos'],
    },
    {
      label: 'Cadastros',
      icon: PrimeIcons.TABLE,
      items: [
        [
          {
            items: [
              {
                label: 'Etapas',
                // routerLink: ['/cadastros/etapas'],
              },
              {
                label: 'Técnicas',
                // routerLink: ['/cadastros/tecnicas'],
              },
              {
                label: 'Usuários',
                routerLink: ['/register/users'],
              },
              {
                label: 'Temáticas',
                // routerLink: ['/cadastros/tematicas'],
              },
            ],
          },
        ],
      ],
    },
    {
      label: 'Conta',
      icon: PrimeIcons.USER_EDIT,
      // routerLink: ['/conta'],
    },
    {
      label: 'Sair',
      icon: PrimeIcons.SIGN_OUT,
      command: () => this.onLogout(),
    },
  ];

  ngOnInit(): void {
    if (this.isAdmin) {
      this.options[2].visible = true;
    } else {
      this.options[2].visible = false;
    }
  }

  onLogout(): void {
    this.logout.emit();
  }
}
