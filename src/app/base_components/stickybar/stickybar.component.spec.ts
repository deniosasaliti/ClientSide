import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickybarComponent } from './stickybar.component';

describe('StickybarComponent', () => {
  let component: StickybarComponent;
  let fixture: ComponentFixture<StickybarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickybarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickybarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
