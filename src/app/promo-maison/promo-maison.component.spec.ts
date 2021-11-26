import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoMaisonComponent } from './promo-maison.component';

describe('PromoMaisonComponent', () => {
  let component: PromoMaisonComponent;
  let fixture: ComponentFixture<PromoMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoMaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
