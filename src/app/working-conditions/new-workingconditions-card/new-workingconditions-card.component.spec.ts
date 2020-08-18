import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkingconditionsCardComponent } from './new-workingconditions-card.component';

describe('NewWorkingconditionsCardComponent', () => {
  let component: NewWorkingconditionsCardComponent;
  let fixture: ComponentFixture<NewWorkingconditionsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWorkingconditionsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWorkingconditionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
