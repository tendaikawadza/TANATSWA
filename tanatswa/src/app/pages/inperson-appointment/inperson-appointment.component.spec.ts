import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpersonAppointmentComponent } from './inperson-appointment.component';

describe('InpersonAppointmentComponent', () => {
  let component: InpersonAppointmentComponent;
  let fixture: ComponentFixture<InpersonAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InpersonAppointmentComponent]
    });
    fixture = TestBed.createComponent(InpersonAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
