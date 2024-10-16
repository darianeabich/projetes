import { CommonModule, NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'projetes-presentation-carrousel',
  standalone: true,
  imports: [CommonModule, NgFor, CarouselModule, CardModule],
  templateUrl: './presentation-carrousel.component.html',
  styleUrl: './presentation-carrousel.component.scss',
})
export class PresentationCarrouselComponent implements OnInit, OnDestroy {
  images = [
    {
      path: '../assets/images/01.png',
      alt: 'Description for Image 1',
      title:
        'Guia para a criação de projetos tecnológicos orientados pelo Design Thinking, um modelo de pensamento centrado no usuário.',
    },
    {
      path: '../assets/images/02.png',
      alt: 'Description for Image 2',
      title:
        'Utilização de diversas técnicas de processo de desenvolvimento projeto de software.',
    },
    {
      path: '../assets/images/03.png',
      alt: 'Description for Image 3',
      title:
        'Estimulação do engajamento na aprendizagem através da gamificação.',
    },
    {
      path: '../assets/images/04.png',
      alt: 'Description for Image 4',
      title: 'Empatia. Criatividade. Inovação.',
    },
  ];
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
