import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingconditionsCardComponent } from './workingconditions-card.component';

describe('WorkingconditionsCardComponent', () => {
  let component: WorkingconditionsCardComponent;
  let fixture: ComponentFixture<WorkingconditionsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingconditionsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingconditionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
