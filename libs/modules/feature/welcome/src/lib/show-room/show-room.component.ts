import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentationCarrouselComponent } from '@projetes/ui-welcome';

@Component({
  selector: 'projetes-show-room',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PresentationCarrouselComponent],
  templateUrl: './show-room.component.html',
  styleUrl: './show-room.component.scss',
})
export class ShowRoomComponent {}
