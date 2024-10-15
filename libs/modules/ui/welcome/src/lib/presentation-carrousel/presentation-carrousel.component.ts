import { CommonModule, NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'projetes-presentation-carrousel',
  standalone: true,
  imports: [CommonModule, CardModule, CarouselModule, NgFor],
  templateUrl: './presentation-carrousel.component.html',
  styleUrl: './presentation-carrousel.component.scss',
})
export class PresentationCarrouselComponent implements OnInit, OnDestroy {
  images = [
    {
      path: '../assets/init/01.png',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      path: '../assets/init/02.png',
      alt: 'Description for Image 2',
      title: 'Title 2',
    },
    {
      path: '../assets/init/03.png',
      alt: 'Description for Image 3',
      title: 'Title 3',
    },
    {
      path: '../assets/init/04.png',
      alt: 'Description for Image 4',
      title: 'Title 4',
    },
  ];
  // responsiveOptions: any[] = [];

  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    // this.responsiveOptions = [
    //   {
    //     breakpoint: '1024px',
    //     numVisible: 1,
    //     numScroll: 1,
    //   },
    //   {
    //     breakpoint: '768px',
    //     numVisible: 1,
    //     numScroll: 1,
    //   },
    //   {
    //     breakpoint: '560px',
    //     numVisible: 1,
    //     numScroll: 1,
    //   },
    // ];

    console.log('images', this.images);
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 10000); // Troca a cada 10 segundos
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.startAutoSlide(); // Reinicia o intervalo ao trocar manualmente
    }
  }
}
