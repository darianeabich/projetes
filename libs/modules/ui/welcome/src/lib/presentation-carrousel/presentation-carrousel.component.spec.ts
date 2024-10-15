import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresentationCarrouselComponent } from './presentation-carrousel.component';

describe('PresentationCarrouselComponent', () => {
  let component: PresentationCarrouselComponent;
  let fixture: ComponentFixture<PresentationCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationCarrouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PresentationCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
