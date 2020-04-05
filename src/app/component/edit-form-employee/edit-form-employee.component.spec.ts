import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormEmployeeComponent } from './edit-form-employee.component';

describe('EditFormEmployeeComponent', () => {
  let component: EditFormEmployeeComponent;
  let fixture: ComponentFixture<EditFormEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFormEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
