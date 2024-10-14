import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'projetes-presentation-carrousel',
  standalone: true,
  imports: [CommonModule, CardModule, CarouselModule],
  templateUrl: './presentation-carrousel.component.html',
  styleUrl: './presentation-carrousel.component.scss',
})
export class PresentationCarrouselComponent implements OnInit {
  images: any[] = [];
  responsiveOptions: any[] = [];

  ngOnInit(): void {
    this.responsiveOptions = [
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

    this.images = [
      {
        source: 'assets/entrada/01.png',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        source: 'assets/entrada/02.png',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        source: 'assets/entrada/03.png',
        alt: 'Description for Image 3',
        title: 'Title 3',
      },
      {
        source: 'assets/entrada/04.png',
        alt: 'Description for Image 4',
        title: 'Title 4',
      },
    ];
  }
}
