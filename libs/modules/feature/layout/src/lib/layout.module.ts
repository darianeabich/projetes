import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonThemeComponent } from './button-theme/button-theme.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [CommonModule, MegaMenuModule, ButtonModule, TooltipModule],
  declarations: [HeaderComponent, MenuComponent, ButtonThemeComponent],
  exports: [HeaderComponent, MenuComponent, ButtonThemeComponent],
})
export class LayoutModule {}
