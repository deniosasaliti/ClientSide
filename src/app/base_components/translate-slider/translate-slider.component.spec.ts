import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateSliderComponent } from './translate-slider.component';

describe('TranslateSliderComponent', () => {
  let component: TranslateSliderComponent;
  let fixture: ComponentFixture<TranslateSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslateSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
