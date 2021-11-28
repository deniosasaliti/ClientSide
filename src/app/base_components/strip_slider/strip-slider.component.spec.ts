import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripSliderComponent } from './strip-slider.component';

describe('StripSliderComponent', () => {
  let component: StripSliderComponent;
  let fixture: ComponentFixture<StripSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
