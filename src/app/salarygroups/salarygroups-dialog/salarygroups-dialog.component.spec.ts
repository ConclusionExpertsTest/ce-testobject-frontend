import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarygroupsDialogComponent } from './salarygroups-dialog.component';

describe('SalarygroupsDialogComponent', () => {
  let component: SalarygroupsDialogComponent;
  let fixture: ComponentFixture<SalarygroupsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarygroupsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarygroupsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
