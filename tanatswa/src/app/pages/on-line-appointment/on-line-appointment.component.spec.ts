import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnLineAppointmentComponent } from './on-line-appointment.component';

describe('OnLineAppointmentComponent', () => {
  let component: OnLineAppointmentComponent;
  let fixture: ComponentFixture<OnLineAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnLineAppointmentComponent]
    });
    fixture = TestBed.createComponent(OnLineAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
