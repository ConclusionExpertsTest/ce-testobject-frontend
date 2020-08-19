import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingconditionsDialogComponent } from './workingconditions-dialog.component';

describe('CreateWorkingconditionsDialogComponent', () => {
  let component: WorkingconditionsDialogComponent;
  let fixture: ComponentFixture<WorkingconditionsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingconditionsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingconditionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
