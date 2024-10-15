import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentationCarrouselComponent } from '@projetes/ui-welcome';

@Component({
  selector: 'projetes-welcome',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PresentationCarrouselComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {}
