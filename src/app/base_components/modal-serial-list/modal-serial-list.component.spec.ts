import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSerialListComponent } from './modal-serial-list.component';

describe('ModalSerialListComponent', () => {
  let component: ModalSerialListComponent;
  let fixture: ComponentFixture<ModalSerialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSerialListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSerialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
