import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialInfoComponent } from './serial-info.component';

describe('SerialInfoComponent', () => {
  let component: SerialInfoComponent;
  let fixture: ComponentFixture<SerialInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerialInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
