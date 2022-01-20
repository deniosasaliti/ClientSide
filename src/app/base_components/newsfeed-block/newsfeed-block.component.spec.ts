import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedBlockComponent } from './newsfeed-block.component';

describe('NewsfeedBlockComponent', () => {
  let component: NewsfeedBlockComponent;
  let fixture: ComponentFixture<NewsfeedBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsfeedBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
