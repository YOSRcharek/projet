import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratuitEnfComponent } from './gratuit-enf.component';

describe('GratuitEnfComponent', () => {
  let component: GratuitEnfComponent;
  let fixture: ComponentFixture<GratuitEnfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GratuitEnfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GratuitEnfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
