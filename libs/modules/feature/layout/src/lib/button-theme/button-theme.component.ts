/* eslint-disable @nx/enforce-module-boundaries */
import { Component, inject, OnInit } from '@angular/core';
import { ETheme } from '@projetes/shared-enums';
import { LocalStorageService } from '@projetes/shared-service';

@Component({
  selector: 'projetes-button-theme',
  templateUrl: './button-theme.component.html',
  styleUrl: './button-theme.component.scss',
})
export class ButtonThemeComponent implements OnInit {
  public icon: string = ETheme.ICON_SUN;
  public tema = 'Light';

  temaGuardado = '';

  localStorageService = inject(LocalStorageService);

  ngOnInit(): void {
    if (this.localStorageService.get('theme')) {
      this.temaGuardado = this.localStorageService.get('theme');
      if (this.temaGuardado === 'Dark') {
        return;
      } else {
        this.changeTheme();
      }
    }
  }

  /**
   * @description Método responsável por alterar o tema (light/dark) da aplicação.
   */
  changeTheme() {
    this.temaGuardado = this.localStorageService.get('theme');

    const theme = document.body.classList.toggle('light-theme');

    if (theme) {
      this.localStorageService.clear();
      return (
        (this.icon = ETheme.ICON_MOON),
        (this.tema = 'Dark'),
        this.localStorageService.set('theme', 'Light')
      );
    }

    this.localStorageService.clear();
    return (
      (this.icon = ETheme.ICON_SUN),
      (this.tema = 'Light'),
      this.localStorageService.set('theme', 'Dark')
    );
  }
}
