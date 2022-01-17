import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarPopoverComponent } from './side-bar-popover.component';

describe('SideBarPopoverComponent', () => {
  let component: SideBarPopoverComponent;
  let fixture: ComponentFixture<SideBarPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarPopoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
