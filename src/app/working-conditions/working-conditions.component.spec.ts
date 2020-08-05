import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingConditionsComponent } from './working-conditions.component';

describe('WorkingConditionsComponent', () => {
  let component: WorkingConditionsComponent;
  let fixture: ComponentFixture<WorkingConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
