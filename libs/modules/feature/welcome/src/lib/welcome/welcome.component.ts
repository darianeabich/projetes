import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeService } from '@projetes/shared-service';
import { PresentationCarrouselComponent } from '@projetes/ui-welcome';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'projetes-welcome',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PresentationCarrouselComponent,
    ButtonModule,
    CarouselModule,
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent implements OnInit {
  private welcomeService: WelcomeService = inject(WelcomeService);
  welcomePhrases: any;
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  ngOnInit(): void {
    this.welcomeService.getPhrases().subscribe((data) => {
      this.welcomePhrases = data;
    });
  }
}
