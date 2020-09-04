import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxSpecificAlertsComponent } from './rx-specific-alerts.component';

describe('RxSpecificAlertsComponent', () => {
  let component: RxSpecificAlertsComponent;
  let fixture: ComponentFixture<RxSpecificAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxSpecificAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxSpecificAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
