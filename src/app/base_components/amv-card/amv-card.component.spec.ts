import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmvCardComponent } from './amv-card.component';

describe('AmvCardComponent', () => {
  let component: AmvCardComponent;
  let fixture: ComponentFixture<AmvCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmvCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmvCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
