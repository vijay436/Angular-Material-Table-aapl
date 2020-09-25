import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOverlayComponent } from './employee-overlay.component';

describe('EmployeeOverlayComponent', () => {
  let component: EmployeeOverlayComponent;
  let fixture: ComponentFixture<EmployeeOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
