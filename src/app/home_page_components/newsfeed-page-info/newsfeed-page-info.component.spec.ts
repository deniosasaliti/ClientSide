import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedPageInfoComponent } from './newsfeed-page-info.component';

describe('NewsfeedPageInfoComponent', () => {
  let component: NewsfeedPageInfoComponent;
  let fixture: ComponentFixture<NewsfeedPageInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsfeedPageInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedPageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
