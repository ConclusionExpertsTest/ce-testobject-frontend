import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkingconditionsDialogComponent } from './create-workingconditions-dialog.component';

describe('CreateWorkingconditionsDialogComponent', () => {
  let component: CreateWorkingconditionsDialogComponent;
  let fixture: ComponentFixture<CreateWorkingconditionsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWorkingconditionsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorkingconditionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
