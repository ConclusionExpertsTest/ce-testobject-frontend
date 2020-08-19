import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanylaptopsDialogComponent } from './companylaptops-dialog.component';

describe('CompanylaptopsDialogComponent', () => {
  let component: CompanylaptopsDialogComponent;
  let fixture: ComponentFixture<CompanylaptopsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanylaptopsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanylaptopsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
