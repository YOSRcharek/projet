import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoHotelComponent } from './promo-hotel.component';

describe('PromoHotelComponent', () => {
  let component: PromoHotelComponent;
  let fixture: ComponentFixture<PromoHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
