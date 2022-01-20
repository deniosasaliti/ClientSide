import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNewsItemComponent } from './last-news-item.component';

describe('LastNewsItemComponent', () => {
  let component: LastNewsItemComponent;
  let fixture: ComponentFixture<LastNewsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastNewsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
