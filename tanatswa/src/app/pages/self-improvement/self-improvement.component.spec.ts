import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfImprovementComponent } from './self-improvement.component';

describe('SelfImprovementComponent', () => {
  let component: SelfImprovementComponent;
  let fixture: ComponentFixture<SelfImprovementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelfImprovementComponent]
    });
    fixture = TestBed.createComponent(SelfImprovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
